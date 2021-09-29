import { ECS } from "../ECS";
import { ECSClient } from "../ECSClient";
import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { ECSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECSClient,
  input: ListTasksCommandInput,
  ...args: any
): Promise<ListTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECS,
  input: ListTasksCommandInput,
  ...args: any
): Promise<ListTasksCommandOutput> => {
  // @ts-ignore
  return await client.listTasks(input, ...args);
};
export async function* paginateListTasks(
  config: ECSPaginationConfiguration,
  input: ListTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTasksCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECS | ECSClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
