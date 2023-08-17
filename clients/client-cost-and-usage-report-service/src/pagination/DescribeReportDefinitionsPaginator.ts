// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeReportDefinitionsCommand,
  DescribeReportDefinitionsCommandInput,
  DescribeReportDefinitionsCommandOutput,
} from "../commands/DescribeReportDefinitionsCommand";
import { CostAndUsageReportServiceClient } from "../CostAndUsageReportServiceClient";
import { CostAndUsageReportServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CostAndUsageReportServiceClient,
  input: DescribeReportDefinitionsCommandInput,
  ...args: any
): Promise<DescribeReportDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReportDefinitionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeReportDefinitions(
  config: CostAndUsageReportServicePaginationConfiguration,
  input: DescribeReportDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReportDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReportDefinitionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CostAndUsageReportServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CostAndUsageReportService | CostAndUsageReportServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
