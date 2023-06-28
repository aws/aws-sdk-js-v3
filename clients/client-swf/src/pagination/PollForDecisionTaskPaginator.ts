// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  PollForDecisionTaskCommand,
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
} from "../commands/PollForDecisionTaskCommand";
import { SWFClient } from "../SWFClient";
import { SWFPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof SWFClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SWF | SWFClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextPageToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
