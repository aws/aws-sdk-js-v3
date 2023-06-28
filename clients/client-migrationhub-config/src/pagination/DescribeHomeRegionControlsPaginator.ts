// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeHomeRegionControlsCommand,
  DescribeHomeRegionControlsCommandInput,
  DescribeHomeRegionControlsCommandOutput,
} from "../commands/DescribeHomeRegionControlsCommand";
import { MigrationHubConfigClient } from "../MigrationHubConfigClient";
import { MigrationHubConfigPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof MigrationHubConfigClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHubConfig | MigrationHubConfigClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
