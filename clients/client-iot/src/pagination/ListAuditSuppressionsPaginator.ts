// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAuditSuppressionsCommand,
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
} from "../commands/ListAuditSuppressionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuditSuppressionsCommandInput,
  ...args: any
): Promise<ListAuditSuppressionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuditSuppressionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAuditSuppressions(
  config: IoTPaginationConfiguration,
  input: ListAuditSuppressionsCommandInput,
  ...additionalArguments: any
): Paginator<ListAuditSuppressionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuditSuppressionsCommandOutput;
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
