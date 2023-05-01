// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListChangedBlocksCommand,
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput,
} from "../commands/ListChangedBlocksCommand";
import { EBSClient } from "../EBSClient";
import { EBSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EBSClient,
  input: ListChangedBlocksCommandInput,
  ...args: any
): Promise<ListChangedBlocksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChangedBlocksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListChangedBlocks(
  config: EBSPaginationConfiguration,
  input: ListChangedBlocksCommandInput,
  ...additionalArguments: any
): Paginator<ListChangedBlocksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChangedBlocksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EBSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EBS | EBSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
