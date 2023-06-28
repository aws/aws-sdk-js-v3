// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeClientAuthenticationSettingsCommand,
  DescribeClientAuthenticationSettingsCommandInput,
  DescribeClientAuthenticationSettingsCommandOutput,
} from "../commands/DescribeClientAuthenticationSettingsCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: DescribeClientAuthenticationSettingsCommandInput,
  ...args: any
): Promise<DescribeClientAuthenticationSettingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClientAuthenticationSettingsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeClientAuthenticationSettings(
  config: DirectoryServicePaginationConfiguration,
  input: DescribeClientAuthenticationSettingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClientAuthenticationSettingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClientAuthenticationSettingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DirectoryServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DirectoryService | DirectoryServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
