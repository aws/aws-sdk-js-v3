import { SWF } from "../SWF";
import { SWFClient } from "../SWFClient";
import {
  PollForDecisionTaskCommand,
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
} from "../commands/PollForDecisionTaskCommand";
import { SWFPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SWFClient,
  input: PollForDecisionTaskCommandInput,
  ...args: any
): Promise<PollForDecisionTaskCommandOutput> => {
  // @ts-ignore
  return await client.send(new PollForDecisionTaskCommand(input, ...args));
};
const makePagedRequest = async (
  client: SWF,
  input: PollForDecisionTaskCommandInput,
  ...args: any
): Promise<PollForDecisionTaskCommandOutput> => {
  // @ts-ignore
  return await client.pollForDecisionTask(input, ...args);
};
export async function* pollForDecisionTaskPaginate(
  config: SWFPaginationConfiguration,
  input: PollForDecisionTaskCommandInput,
  ...additionalArguments: any
): Paginator<PollForDecisionTaskCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: PollForDecisionTaskCommandOutput;
  while (hasNext) {
    input["nextPageToken"] = token;
    input["maximumPageSize"] = config.pageSize;
    if (config.client instanceof SWF) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SWFClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SWF | SWFClient");
    }
    yield page;
    token = page["nextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
