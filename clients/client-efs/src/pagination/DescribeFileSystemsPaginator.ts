// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import { EFSClient } from "../EFSClient";
import { EFSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof EFSClient) {
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
