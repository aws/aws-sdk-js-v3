// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetInsightSummariesCommand,
  GetInsightSummariesCommandInput,
  GetInsightSummariesCommandOutput,
} from "../commands/GetInsightSummariesCommand";
import { XRay } from "../XRay";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: XRayClient,
  input: GetInsightSummariesCommandInput,
  ...args: any
): Promise<GetInsightSummariesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInsightSummariesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: XRay,
  input: GetInsightSummariesCommandInput,
  ...args: any
): Promise<GetInsightSummariesCommandOutput> => {
  // @ts-ignore
  return await client.getInsightSummaries(input, ...args);
};
export async function* paginateGetInsightSummaries(
  config: XRayPaginationConfiguration,
  input: GetInsightSummariesCommandInput,
  ...additionalArguments: any
): Paginator<GetInsightSummariesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetInsightSummariesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof XRay) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
