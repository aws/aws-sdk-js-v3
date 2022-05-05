// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import { EFS } from "../EFS";
import { EFSClient } from "../EFSClient";
import { EFSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EFSClient,
  input: DescribeFileSystemsCommandInput,
  ...args: any
): Promise<DescribeFileSystemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFileSystemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EFS,
  input: DescribeFileSystemsCommandInput,
  ...args: any
): Promise<DescribeFileSystemsCommandOutput> => {
  // @ts-ignore
  return await client.describeFileSystems(input, ...args);
};
export async function* paginateDescribeFileSystems(
  config: EFSPaginationConfiguration,
  input: DescribeFileSystemsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFileSystemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFileSystemsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof EFS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EFSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EFS | EFSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
