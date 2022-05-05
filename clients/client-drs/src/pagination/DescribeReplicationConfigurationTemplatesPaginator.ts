// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeReplicationConfigurationTemplatesCommand,
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "../commands/DescribeReplicationConfigurationTemplatesCommand";
import { Drs } from "../Drs";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DrsClient,
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  ...args: any
): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationConfigurationTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Drs,
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  ...args: any
): Promise<DescribeReplicationConfigurationTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationConfigurationTemplates(input, ...args);
};
export async function* paginateDescribeReplicationConfigurationTemplates(
  config: DrsPaginationConfiguration,
  input: DescribeReplicationConfigurationTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationConfigurationTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationConfigurationTemplatesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Drs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DrsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Drs | DrsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
