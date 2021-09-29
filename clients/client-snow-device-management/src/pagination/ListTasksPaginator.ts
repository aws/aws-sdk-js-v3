import { SnowDeviceManagement } from "../SnowDeviceManagement";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient";
import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { SnowDeviceManagementPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SnowDeviceManagementClient,
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
  client: SnowDeviceManagement,
  input: ListTasksCommandInput,
  ...args: any
): Promise<ListTasksCommandOutput> => {
  // @ts-ignore
  return await client.listTasks(input, ...args);
};
export async function* paginateListTasks(
  config: SnowDeviceManagementPaginationConfiguration,
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
    if (config.client instanceof SnowDeviceManagement) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SnowDeviceManagementClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SnowDeviceManagement | SnowDeviceManagementClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
