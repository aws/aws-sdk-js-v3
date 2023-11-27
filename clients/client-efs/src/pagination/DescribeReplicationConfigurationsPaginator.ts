// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeReplicationConfigurationsCommand,
  DescribeReplicationConfigurationsCommandInput,
  DescribeReplicationConfigurationsCommandOutput,
} from "../commands/DescribeReplicationConfigurationsCommand";
import { EFSClient } from "../EFSClient";
import { EFSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EFSClient,
  input: DescribeReplicationConfigurationsCommandInput,
  ...args: any
): Promise<DescribeReplicationConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeReplicationConfigurations(
  config: EFSPaginationConfiguration,
  input: DescribeReplicationConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EFSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EFS | EFSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
