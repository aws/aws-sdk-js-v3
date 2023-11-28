// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRealtimeContactAnalysisSegmentsV2Command,
  ListRealtimeContactAnalysisSegmentsV2CommandInput,
  ListRealtimeContactAnalysisSegmentsV2CommandOutput,
} from "../commands/ListRealtimeContactAnalysisSegmentsV2Command";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListRealtimeContactAnalysisSegmentsV2CommandInput,
  ...args: any
): Promise<ListRealtimeContactAnalysisSegmentsV2CommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRealtimeContactAnalysisSegmentsV2Command(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRealtimeContactAnalysisSegmentsV2(
  config: ConnectPaginationConfiguration,
  input: ListRealtimeContactAnalysisSegmentsV2CommandInput,
  ...additionalArguments: any
): Paginator<ListRealtimeContactAnalysisSegmentsV2CommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRealtimeContactAnalysisSegmentsV2CommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
