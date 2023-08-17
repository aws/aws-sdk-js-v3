// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetComplianceSummaryCommand,
  GetComplianceSummaryCommandInput,
  GetComplianceSummaryCommandOutput,
} from "../commands/GetComplianceSummaryCommand";
import { ResourceGroupsTaggingAPIClient } from "../ResourceGroupsTaggingAPIClient";
import { ResourceGroupsTaggingAPIPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof ResourceGroupsTaggingAPIClient) {
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
