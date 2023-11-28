// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDirectoryBucketsCommand,
  ListDirectoryBucketsCommandInput,
  ListDirectoryBucketsCommandOutput,
} from "../commands/ListDirectoryBucketsCommand";
import { S3Client } from "../S3Client";
import { S3PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: S3Client,
  input: ListDirectoryBucketsCommandInput,
  ...args: any
): Promise<ListDirectoryBucketsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDirectoryBucketsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDirectoryBuckets(
  config: S3PaginationConfiguration,
  input: ListDirectoryBucketsCommandInput,
  ...additionalArguments: any
): Paginator<ListDirectoryBucketsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.ContinuationToken
  let token: typeof input.ContinuationToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDirectoryBucketsCommandOutput;
  while (hasNext) {
    input.ContinuationToken = token;
    input["MaxDirectoryBuckets"] = config.pageSize;
    if (config.client instanceof S3Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3 | S3Client");
    }
    yield page;
    const prevToken = token;
    token = page.ContinuationToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
