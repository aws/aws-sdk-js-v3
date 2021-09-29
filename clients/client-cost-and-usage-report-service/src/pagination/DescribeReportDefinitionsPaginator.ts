import { CostAndUsageReportService } from "../CostAndUsageReportService";
import { CostAndUsageReportServiceClient } from "../CostAndUsageReportServiceClient";
import {
  DescribeReportDefinitionsCommand,
  DescribeReportDefinitionsCommandInput,
  DescribeReportDefinitionsCommandOutput,
} from "../commands/DescribeReportDefinitionsCommand";
import { CostAndUsageReportServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: CostAndUsageReportService,
  input: DescribeReportDefinitionsCommandInput,
  ...args: any
): Promise<DescribeReportDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.describeReportDefinitions(input, ...args);
};
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
    if (config.client instanceof CostAndUsageReportService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CostAndUsageReportServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CostAndUsageReportService | CostAndUsageReportServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
