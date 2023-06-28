// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ExecuteQueryCommand,
  ExecuteQueryCommandInput,
  ExecuteQueryCommandOutput,
} from "../commands/ExecuteQueryCommand";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTTwinMakerClient,
  input: ExecuteQueryCommandInput,
  ...args: any
): Promise<ExecuteQueryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ExecuteQueryCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateExecuteQuery(
  config: IoTTwinMakerPaginationConfiguration,
  input: ExecuteQueryCommandInput,
  ...additionalArguments: any
): Paginator<ExecuteQueryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ExecuteQueryCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTTwinMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTTwinMaker | IoTTwinMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
