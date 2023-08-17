// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListThingRegistrationTaskReportsCommand,
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput,
} from "../commands/ListThingRegistrationTaskReportsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListThingRegistrationTaskReportsCommandInput,
  ...args: any
): Promise<ListThingRegistrationTaskReportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThingRegistrationTaskReportsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListThingRegistrationTaskReports(
  config: IoTPaginationConfiguration,
  input: ListThingRegistrationTaskReportsCommandInput,
  ...additionalArguments: any
): Paginator<ListThingRegistrationTaskReportsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThingRegistrationTaskReportsCommandOutput;
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
