// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAuditSuppressionsCommand,
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
} from "../commands/ListAuditSuppressionsCommand";
import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListAuditSuppressionsCommandInput,
  ...args: any
): Promise<ListAuditSuppressionsCommandOutput> => {
  // @ts-ignore
  return await client.listAuditSuppressions(input, ...args);
};
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
