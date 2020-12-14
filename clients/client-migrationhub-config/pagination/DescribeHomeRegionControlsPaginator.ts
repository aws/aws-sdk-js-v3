import { MigrationHubConfig } from "../MigrationHubConfig";
import { MigrationHubConfigClient } from "../MigrationHubConfigClient";
import {
  DescribeHomeRegionControlsCommand,
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput,
} from "../commands/DescribeHomeRegionControlsCommand";
import { MigrationHubConfigPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubConfigClient,
  input: DescribeHomeRegionControlsCommandInput,
  ...args: any
): Promise<DescribeHomeRegionControlsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeHomeRegionControlsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHubConfig,
  input: DescribeHomeRegionControlsCommandInput,
  ...args: any
): Promise<DescribeHomeRegionControlsCommandOutput> => {
  // @ts-ignore
  return await client.describeHomeRegionControls(input, ...args);
};
export async function* paginateDescribeHomeRegionControls(
  config: MigrationHubConfigPaginationConfiguration,
  input: DescribeHomeRegionControlsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeHomeRegionControlsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeHomeRegionControlsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MigrationHubConfig) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MigrationHubConfigClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHubConfig | MigrationHubConfigClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
