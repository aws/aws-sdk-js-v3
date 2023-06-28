// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAuditMitigationActionsExecutionsCommand,
  ListAuditMitigationActionsExecutionsCommandInput,
  ListAuditMitigationActionsExecutionsCommandOutput,
} from "../commands/ListAuditMitigationActionsExecutionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuditMitigationActionsExecutionsCommandInput,
  ...args: any
): Promise<ListAuditMitigationActionsExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuditMitigationActionsExecutionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAuditMitigationActionsExecutions(
  config: IoTPaginationConfiguration,
  input: ListAuditMitigationActionsExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListAuditMitigationActionsExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuditMitigationActionsExecutionsCommandOutput;
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
