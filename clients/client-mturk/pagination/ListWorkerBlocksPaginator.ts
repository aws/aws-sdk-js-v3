import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import {
  ListWorkerBlocksCommand,
  ListWorkerBlocksCommandInput,
  ListWorkerBlocksCommandOutput,
} from "../commands/ListWorkerBlocksCommand";
import { MTurkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListWorkerBlocksCommandInput,
  ...args: any
): Promise<ListWorkerBlocksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkerBlocksCommand(input), ...args);
};
const makePagedRequest = async (
  client: MTurk,
  input: ListWorkerBlocksCommandInput,
  ...args: any
): Promise<ListWorkerBlocksCommandOutput> => {
  // @ts-ignore
  return await client.listWorkerBlocks(input, ...args);
};
export async function* listWorkerBlocksPaginate(
  config: MTurkPaginationConfiguration,
  input: ListWorkerBlocksCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkerBlocksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkerBlocksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
