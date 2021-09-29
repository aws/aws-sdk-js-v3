import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import {
  DescribeStandardsControlsCommand,
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput,
} from "../commands/DescribeStandardsControlsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: DescribeStandardsControlsCommandInput,
  ...args: any
): Promise<DescribeStandardsControlsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStandardsControlsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SecurityHub,
  input: DescribeStandardsControlsCommandInput,
  ...args: any
): Promise<DescribeStandardsControlsCommandOutput> => {
  // @ts-ignore
  return await client.describeStandardsControls(input, ...args);
};
export async function* paginateDescribeStandardsControls(
  config: SecurityHubPaginationConfiguration,
  input: DescribeStandardsControlsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStandardsControlsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeStandardsControlsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
