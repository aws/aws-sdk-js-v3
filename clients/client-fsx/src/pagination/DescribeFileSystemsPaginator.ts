// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FSxClient,
  input: DescribeFileSystemsCommandInput,
  ...args: any
): Promise<DescribeFileSystemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFileSystemsCommand(input), ...args);
};
export async function* paginateDescribeFileSystems(
  config: FSxPaginationConfiguration,
  input: DescribeFileSystemsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFileSystemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFileSystemsCommandOutput;
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
