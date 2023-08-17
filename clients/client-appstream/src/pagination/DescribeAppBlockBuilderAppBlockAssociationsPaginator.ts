// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppStreamClient } from "../AppStreamClient";
import {
  DescribeAppBlockBuilderAppBlockAssociationsCommand,
  DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  DescribeAppBlockBuilderAppBlockAssociationsCommandOutput,
} from "../commands/DescribeAppBlockBuilderAppBlockAssociationsCommand";
import { AppStreamPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppStreamClient,
  input: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  ...args: any
): Promise<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAppBlockBuilderAppBlockAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAppBlockBuilderAppBlockAssociations(
  config: AppStreamPaginationConfiguration,
  input: DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAppBlockBuilderAppBlockAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAppBlockBuilderAppBlockAssociationsCommandOutput;
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
