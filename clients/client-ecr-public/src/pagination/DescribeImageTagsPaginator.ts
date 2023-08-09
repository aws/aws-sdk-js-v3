// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeImageTagsCommand,
  DescribeImageTagsCommandInput,
  DescribeImageTagsCommandOutput,
} from "../commands/DescribeImageTagsCommand";
import { ECRPUBLICClient } from "../ECRPUBLICClient";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ECRPUBLICClient,
  input: DescribeImageTagsCommandInput,
  ...args: any
): Promise<DescribeImageTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeImageTagsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeImageTags(
  config: ECRPUBLICPaginationConfiguration,
  input: DescribeImageTagsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImageTagsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeImageTagsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECRPUBLICClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECRPUBLIC | ECRPUBLICClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
