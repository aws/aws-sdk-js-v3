// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "../commands/ListExecutionsCommand";
import { SFN } from "../SFN";
import { SFNClient } from "../SFNClient";
import { SFNPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SFNClient,
  input: ListExecutionsCommandInput,
  ...args: any
): Promise<ListExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SFN,
  input: ListExecutionsCommandInput,
  ...args: any
): Promise<ListExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listExecutions(input, ...args);
};
export async function* paginateListExecutions(
  config: SFNPaginationConfiguration,
  input: ListExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExecutionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SFN) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SFNClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SFN | SFNClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
