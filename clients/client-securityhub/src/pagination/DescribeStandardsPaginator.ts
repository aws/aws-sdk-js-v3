// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeStandardsCommand,
  DescribeStandardsCommandInput,
  DescribeStandardsCommandOutput,
} from "../commands/DescribeStandardsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: DescribeStandardsCommandInput,
  ...args: any
): Promise<DescribeStandardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStandardsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeStandards(
  config: SecurityHubPaginationConfiguration,
  input: DescribeStandardsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStandardsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeStandardsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
