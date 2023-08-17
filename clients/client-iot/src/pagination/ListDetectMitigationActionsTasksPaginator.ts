// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDetectMitigationActionsTasksCommand,
  ListDetectMitigationActionsTasksCommandInput,
  ListDetectMitigationActionsTasksCommandOutput,
} from "../commands/ListDetectMitigationActionsTasksCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListDetectMitigationActionsTasksCommandInput,
  ...args: any
): Promise<ListDetectMitigationActionsTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDetectMitigationActionsTasksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDetectMitigationActionsTasks(
  config: IoTPaginationConfiguration,
  input: ListDetectMitigationActionsTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListDetectMitigationActionsTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDetectMitigationActionsTasksCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
