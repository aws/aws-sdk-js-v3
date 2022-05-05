// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetComplianceSummaryCommand,
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput,
} from "../commands/GetComplianceSummaryCommand";
import { ResourceGroupsTaggingAPI } from "../ResourceGroupsTaggingAPI";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResourceGroupsTaggingAPIClient,
  input: GetComplianceSummaryCommandInput,
  ...args: any
): Promise<GetComplianceSummaryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetComplianceSummaryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ResourceGroupsTaggingAPI,
  input: GetComplianceSummaryCommandInput,
  ...args: any
): Promise<GetComplianceSummaryCommandOutput> => {
  // @ts-ignore
  return await client.getComplianceSummary(input, ...args);
};
export async function* paginateGetComplianceSummary(
  config: ResourceGroupsTaggingAPIPaginationConfiguration,
  input: GetComplianceSummaryCommandInput,
  ...additionalArguments: any
): Paginator<GetComplianceSummaryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PaginationToken
  let token: typeof input.PaginationToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetComplianceSummaryCommandOutput;
  while (hasNext) {
    input.PaginationToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ResourceGroupsTaggingAPI) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResourceGroupsTaggingAPIClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ResourceGroupsTaggingAPI | ResourceGroupsTaggingAPIClient");
    }
    yield page;
    const prevToken = token;
    token = page.PaginationToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
