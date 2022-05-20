// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRealtimeContactAnalysisSegmentsCommand,
  ListRealtimeContactAnalysisSegmentsCommandInput,
  ListRealtimeContactAnalysisSegmentsCommandOutput,
} from "../commands/ListRealtimeContactAnalysisSegmentsCommand";
import { ConnectContactLens } from "../ConnectContactLens";
import { ConnectContactLensClient } from "../ConnectContactLensClient";
import { ConnectContactLensPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectContactLensClient,
  input: ListRealtimeContactAnalysisSegmentsCommandInput,
  ...args: any
): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRealtimeContactAnalysisSegmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConnectContactLens,
  input: ListRealtimeContactAnalysisSegmentsCommandInput,
  ...args: any
): Promise<ListRealtimeContactAnalysisSegmentsCommandOutput> => {
  // @ts-ignore
  return await client.listRealtimeContactAnalysisSegments(input, ...args);
};
export async function* paginateListRealtimeContactAnalysisSegments(
  config: ConnectContactLensPaginationConfiguration,
  input: ListRealtimeContactAnalysisSegmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListRealtimeContactAnalysisSegmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRealtimeContactAnalysisSegmentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectContactLens) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectContactLensClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConnectContactLens | ConnectContactLensClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
