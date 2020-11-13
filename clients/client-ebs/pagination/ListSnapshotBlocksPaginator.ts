import { EBS } from "../EBS";
import { EBSClient } from "../EBSClient";
import {
  ListSnapshotBlocksCommand,
  ListSnapshotBlocksCommandInput,
  ListSnapshotBlocksCommandOutput,
} from "../commands/ListSnapshotBlocksCommand";
import { EBSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EBSClient,
  input: ListSnapshotBlocksCommandInput,
  ...args: any
): Promise<ListSnapshotBlocksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSnapshotBlocksCommand(input), ...args);
};
const makePagedRequest = async (
  client: EBS,
  input: ListSnapshotBlocksCommandInput,
  ...args: any
): Promise<ListSnapshotBlocksCommandOutput> => {
  // @ts-ignore
  return await client.listSnapshotBlocks(input, ...args);
};
export async function* listSnapshotBlocksPaginate(
  config: EBSPaginationConfiguration,
  input: ListSnapshotBlocksCommandInput,
  ...additionalArguments: any
): Paginator<ListSnapshotBlocksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
