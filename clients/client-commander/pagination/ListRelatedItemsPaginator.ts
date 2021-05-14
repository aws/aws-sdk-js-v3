import { Commander } from "../Commander";
import { CommanderClient } from "../CommanderClient";
import {
  ListRelatedItemsCommand,
  ListRelatedItemsCommandInput,
  ListRelatedItemsCommandOutput,
} from "../commands/ListRelatedItemsCommand";
import { CommanderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CommanderClient,
  input: ListRelatedItemsCommandInput,
  ...args: any
): Promise<ListRelatedItemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRelatedItemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Commander,
  input: ListRelatedItemsCommandInput,
  ...args: any
): Promise<ListRelatedItemsCommandOutput> => {
  // @ts-ignore
  return await client.listRelatedItems(input, ...args);
};
export async function* paginateListRelatedItems(
  config: CommanderPaginationConfiguration,
  input: ListRelatedItemsCommandInput,
  ...additionalArguments: any
): Paginator<ListRelatedItemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRelatedItemsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Commander) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CommanderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Commander | CommanderClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
