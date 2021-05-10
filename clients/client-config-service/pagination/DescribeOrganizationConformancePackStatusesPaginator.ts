import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  DescribeOrganizationConformancePackStatusesCommand,
  DescribeOrganizationConformancePackStatusesCommandInput,
  DescribeOrganizationConformancePackStatusesCommandOutput,
} from "../commands/DescribeOrganizationConformancePackStatusesCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeOrganizationConformancePackStatusesCommandInput,
  ...args: any
): Promise<DescribeOrganizationConformancePackStatusesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOrganizationConformancePackStatusesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConfigService,
  input: DescribeOrganizationConformancePackStatusesCommandInput,
  ...args: any
): Promise<DescribeOrganizationConformancePackStatusesCommandOutput> => {
  // @ts-ignore
  return await client.describeOrganizationConformancePackStatuses(input, ...args);
};
export async function* paginateDescribeOrganizationConformancePackStatuses(
  config: ConfigServicePaginationConfiguration,
  input: DescribeOrganizationConformancePackStatusesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOrganizationConformancePackStatusesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOrganizationConformancePackStatusesCommandOutput;
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
