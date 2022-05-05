// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAuditMitigationActionsTasksCommand,
  ListAuditMitigationActionsTasksCommandInput,
  ListAuditMitigationActionsTasksCommandOutput,
} from "../commands/ListAuditMitigationActionsTasksCommand";
import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuditMitigationActionsTasksCommandInput,
  ...args: any
): Promise<ListAuditMitigationActionsTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuditMitigationActionsTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListAuditMitigationActionsTasksCommandInput,
  ...args: any
): Promise<ListAuditMitigationActionsTasksCommandOutput> => {
  // @ts-ignore
  return await client.listAuditMitigationActionsTasks(input, ...args);
};
export async function* paginateListAuditMitigationActionsTasks(
  config: IoTPaginationConfiguration,
  input: ListAuditMitigationActionsTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListAuditMitigationActionsTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuditMitigationActionsTasksCommandOutput;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
