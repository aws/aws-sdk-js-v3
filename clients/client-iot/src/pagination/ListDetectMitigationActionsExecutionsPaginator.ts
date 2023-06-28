// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDetectMitigationActionsExecutionsCommand,
  ListDetectMitigationActionsExecutionsCommandInput,
  ListDetectMitigationActionsExecutionsCommandOutput,
} from "../commands/ListDetectMitigationActionsExecutionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListDetectMitigationActionsExecutionsCommandInput,
  ...args: any
): Promise<ListDetectMitigationActionsExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDetectMitigationActionsExecutionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDetectMitigationActionsExecutions(
  config: IoTPaginationConfiguration,
  input: ListDetectMitigationActionsExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDetectMitigationActionsExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDetectMitigationActionsExecutionsCommandOutput;
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
