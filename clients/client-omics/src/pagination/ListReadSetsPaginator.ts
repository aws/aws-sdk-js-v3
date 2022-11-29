// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListReadSetsCommand,
  ListReadSetsCommandInput,
  ListReadSetsCommandOutput,
} from "../commands/ListReadSetsCommand";
import { Omics } from "../Omics";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListReadSetsCommandInput,
  ...args: any
): Promise<ListReadSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReadSetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Omics,
  input: ListReadSetsCommandInput,
  ...args: any
): Promise<ListReadSetsCommandOutput> => {
  // @ts-ignore
  return await client.listReadSets(input, ...args);
};
export async function* paginateListReadSets(
  config: OmicsPaginationConfiguration,
  input: ListReadSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListReadSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReadSetsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Omics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OmicsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Omics | OmicsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
