// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeServersCommand,
  DescribeServersCommandInput,
  DescribeServersCommandOutput,
} from "../commands/DescribeServersCommand";
import { OpsWorksCMClient } from "../OpsWorksCMClient";
import { OpsWorksCMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OpsWorksCMClient,
  input: DescribeServersCommandInput,
  ...args: any
): Promise<DescribeServersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeServersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeServers(
  config: OpsWorksCMPaginationConfiguration,
  input: DescribeServersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeServersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeServersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpsWorksCMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpsWorksCM | OpsWorksCMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
