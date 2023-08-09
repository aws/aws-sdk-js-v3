// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeFileSystemAliasesCommand,
  DescribeFileSystemAliasesCommandInput,
  DescribeFileSystemAliasesCommandOutput,
} from "../commands/DescribeFileSystemAliasesCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FSxClient,
  input: DescribeFileSystemAliasesCommandInput,
  ...args: any
): Promise<DescribeFileSystemAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFileSystemAliasesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeFileSystemAliases(
  config: FSxPaginationConfiguration,
  input: DescribeFileSystemAliasesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFileSystemAliasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFileSystemAliasesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FSxClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FSx | FSxClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
