// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppStreamClient } from "../AppStreamClient";
import {
  DescribeAppBlockBuildersCommand,
  DescribeAppBlockBuildersCommandInput,
  DescribeAppBlockBuildersCommandOutput,
} from "../commands/DescribeAppBlockBuildersCommand";
import { AppStreamPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppStreamClient,
  input: DescribeAppBlockBuildersCommandInput,
  ...args: any
): Promise<DescribeAppBlockBuildersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAppBlockBuildersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAppBlockBuilders(
  config: AppStreamPaginationConfiguration,
  input: DescribeAppBlockBuildersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAppBlockBuildersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAppBlockBuildersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppStreamClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppStream | AppStreamClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
