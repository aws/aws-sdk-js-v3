// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeActionTargetsCommand,
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
} from "../commands/DescribeActionTargetsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: DescribeActionTargetsCommandInput,
  ...args: any
): Promise<DescribeActionTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeActionTargetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeActionTargets(
  config: SecurityHubPaginationConfiguration,
  input: DescribeActionTargetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeActionTargetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeActionTargetsCommandOutput;
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
