import { Commander } from "../Commander";
import { CommanderClient } from "../CommanderClient";
import {
  ListReplicationSetsCommand,
  ListReplicationSetsCommandInput,
  ListReplicationSetsCommandOutput,
} from "../commands/ListReplicationSetsCommand";
import { CommanderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CommanderClient,
  input: ListReplicationSetsCommandInput,
  ...args: any
): Promise<ListReplicationSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReplicationSetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Commander,
  input: ListReplicationSetsCommandInput,
  ...args: any
): Promise<ListReplicationSetsCommandOutput> => {
  // @ts-ignore
  return await client.listReplicationSets(input, ...args);
};
export async function* paginateListReplicationSets(
  config: CommanderPaginationConfiguration,
  input: ListReplicationSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListReplicationSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReplicationSetsCommandOutput;
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
