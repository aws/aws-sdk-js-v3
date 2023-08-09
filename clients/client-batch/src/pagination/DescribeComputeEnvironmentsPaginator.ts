// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  DescribeComputeEnvironmentsCommand,
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
} from "../commands/DescribeComputeEnvironmentsCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BatchClient,
  input: DescribeComputeEnvironmentsCommandInput,
  ...args: any
): Promise<DescribeComputeEnvironmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeComputeEnvironmentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeComputeEnvironments(
  config: BatchPaginationConfiguration,
  input: DescribeComputeEnvironmentsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeComputeEnvironmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeComputeEnvironmentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof BatchClient) {
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
