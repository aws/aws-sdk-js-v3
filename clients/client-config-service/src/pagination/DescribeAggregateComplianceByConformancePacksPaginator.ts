import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  DescribeAggregateComplianceByConformancePacksCommand,
  DescribeAggregateComplianceByConformancePacksCommandInput,
  DescribeAggregateComplianceByConformancePacksCommandOutput,
} from "../commands/DescribeAggregateComplianceByConformancePacksCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeAggregateComplianceByConformancePacksCommandInput,
  ...args: any
): Promise<DescribeAggregateComplianceByConformancePacksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAggregateComplianceByConformancePacksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeAggregateComplianceByConformancePacksCommandInput,
  ...args: any
): Promise<DescribeAggregateComplianceByConformancePacksCommandOutput> => {
  // @ts-ignore
  return await client.describeAggregateComplianceByConformancePacks(input, ...args);
};
export async function* paginateDescribeAggregateComplianceByConformancePacks(
  config: ConfigServicePaginationConfiguration,
  input: DescribeAggregateComplianceByConformancePacksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAggregateComplianceByConformancePacksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAggregateComplianceByConformancePacksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
