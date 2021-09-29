import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListAuditTasksCommand,
  ListAuditTasksCommandInput,
  ListAuditTasksCommandOutput,
} from "../commands/ListAuditTasksCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuditTasksCommandInput,
  ...args: any
): Promise<ListAuditTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuditTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListAuditTasksCommandInput,
  ...args: any
): Promise<ListAuditTasksCommandOutput> => {
  // @ts-ignore
  return await client.listAuditTasks(input, ...args);
};
export async function* paginateListAuditTasks(
  config: IoTPaginationConfiguration,
  input: ListAuditTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListAuditTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuditTasksCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
