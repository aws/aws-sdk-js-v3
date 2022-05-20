// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSnapshotBlocksCommand,
  ListSnapshotBlocksCommandInput,
  ListSnapshotBlocksCommandOutput,
} from "../commands/ListSnapshotBlocksCommand";
import { EBS } from "../EBS";
import { EBSClient } from "../EBSClient";
import { EBSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EBSClient,
  input: ListSnapshotBlocksCommandInput,
  ...args: any
): Promise<ListSnapshotBlocksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSnapshotBlocksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EBS,
  input: ListSnapshotBlocksCommandInput,
  ...args: any
): Promise<ListSnapshotBlocksCommandOutput> => {
  // @ts-ignore
  return await client.listSnapshotBlocks(input, ...args);
};
export async function* paginateListSnapshotBlocks(
  config: EBSPaginationConfiguration,
  input: ListSnapshotBlocksCommandInput,
  ...additionalArguments: any
): Paginator<ListSnapshotBlocksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSnapshotBlocksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EBS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EBSClient) {
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
