import { Commander } from "../Commander";
import { CommanderClient } from "../CommanderClient";
import {
  ListResponsePlansCommand,
  ListResponsePlansCommandInput,
  ListResponsePlansCommandOutput,
} from "../commands/ListResponsePlansCommand";
import { CommanderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CommanderClient,
  input: ListResponsePlansCommandInput,
  ...args: any
): Promise<ListResponsePlansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResponsePlansCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Commander,
  input: ListResponsePlansCommandInput,
  ...args: any
): Promise<ListResponsePlansCommandOutput> => {
  // @ts-ignore
  return await client.listResponsePlans(input, ...args);
};
export async function* paginateListResponsePlans(
  config: CommanderPaginationConfiguration,
  input: ListResponsePlansCommandInput,
  ...additionalArguments: any
): Paginator<ListResponsePlansCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResponsePlansCommandOutput;
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
