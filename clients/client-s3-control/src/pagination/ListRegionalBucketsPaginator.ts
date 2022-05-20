// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRegionalBucketsCommand,
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
} from "../commands/ListRegionalBucketsCommand";
import { S3Control } from "../S3Control";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: S3ControlClient,
  input: ListRegionalBucketsCommandInput,
  ...args: any
): Promise<ListRegionalBucketsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRegionalBucketsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: S3Control,
  input: ListRegionalBucketsCommandInput,
  ...args: any
): Promise<ListRegionalBucketsCommandOutput> => {
  // @ts-ignore
  return await client.listRegionalBuckets(input, ...args);
};
export async function* paginateListRegionalBuckets(
  config: S3ControlPaginationConfiguration,
  input: ListRegionalBucketsCommandInput,
  ...additionalArguments: any
): Paginator<ListRegionalBucketsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRegionalBucketsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof S3Control) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof S3ControlClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3Control | S3ControlClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
