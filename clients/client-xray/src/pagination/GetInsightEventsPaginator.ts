// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetInsightEventsCommand,
  GetInsightEventsCommandInput,
  GetInsightEventsCommandOutput,
} from "../commands/GetInsightEventsCommand";
import { XRay } from "../XRay";
import { XRayClient } from "../XRayClient";
import { XRayPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: XRayClient,
  input: GetInsightEventsCommandInput,
  ...args: any
): Promise<GetInsightEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInsightEventsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: XRay,
  input: GetInsightEventsCommandInput,
  ...args: any
): Promise<GetInsightEventsCommandOutput> => {
  // @ts-ignore
  return await client.getInsightEvents(input, ...args);
};
export async function* paginateGetInsightEvents(
  config: XRayPaginationConfiguration,
  input: GetInsightEventsCommandInput,
  ...additionalArguments: any
): Paginator<GetInsightEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetInsightEventsCommandOutput;
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
