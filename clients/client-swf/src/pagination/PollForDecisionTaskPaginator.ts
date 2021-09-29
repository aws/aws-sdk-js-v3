import { SWF } from "../SWF";
import { SWFClient } from "../SWFClient";
import {
  PollForDecisionTaskCommand,
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
} from "../commands/PollForDecisionTaskCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SWFClient,
  input: PollForDecisionTaskCommandInput,
  ...args: any
): Promise<PollForDecisionTaskCommandOutput> => {
  // @ts-ignore
  return await client.send(new PollForDecisionTaskCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SWF,
  input: PollForDecisionTaskCommandInput,
  ...args: any
): Promise<PollForDecisionTaskCommandOutput> => {
  // @ts-ignore
  return await client.pollForDecisionTask(input, ...args);
};
export async function* paginatePollForDecisionTask(
  config: SWFPaginationConfiguration,
  input: PollForDecisionTaskCommandInput,
  ...additionalArguments: any
): Paginator<PollForDecisionTaskCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextPageToken
  let token: typeof input.nextPageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: PollForDecisionTaskCommandOutput;
  while (hasNext) {
    input.nextPageToken = token;
    input["maximumPageSize"] = config.pageSize;
    if (config.client instanceof SWF) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SWFClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SWF | SWFClient");
    }
    yield page;
    token = page.nextPageToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
