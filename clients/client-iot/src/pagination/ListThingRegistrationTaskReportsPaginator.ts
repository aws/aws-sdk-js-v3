import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListThingRegistrationTaskReportsCommand,
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput,
} from "../commands/ListThingRegistrationTaskReportsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListThingRegistrationTaskReportsCommandInput,
  ...args: any
): Promise<ListThingRegistrationTaskReportsCommandOutput> => {
  // @ts-ignore
  return await client.listThingRegistrationTaskReports(input, ...args);
};
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
