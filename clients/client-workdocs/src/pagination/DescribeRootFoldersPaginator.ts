// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeRootFoldersCommand,
  DescribeRootFoldersCommandInput,
  DescribeRootFoldersCommandOutput,
} from "../commands/DescribeRootFoldersCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkDocsClient,
  input: DescribeRootFoldersCommandInput,
  ...args: any
): Promise<DescribeRootFoldersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRootFoldersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeRootFolders(
  config: WorkDocsPaginationConfiguration,
  input: DescribeRootFoldersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRootFoldersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRootFoldersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof WorkDocsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkDocs | WorkDocsClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
