// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Batch } from "../Batch";
import { BatchClient } from "../BatchClient";
import {
  DescribeJobDefinitionsCommand,
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
} from "../commands/DescribeJobDefinitionsCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BatchClient,
  input: DescribeJobDefinitionsCommandInput,
  ...args: any
): Promise<DescribeJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeJobDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Batch,
  input: DescribeJobDefinitionsCommandInput,
  ...args: any
): Promise<DescribeJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.describeJobDefinitions(input, ...args);
};
export async function* paginateDescribeJobDefinitions(
  config: BatchPaginationConfiguration,
  input: DescribeJobDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeJobDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeJobDefinitionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Batch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Batch | BatchClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
