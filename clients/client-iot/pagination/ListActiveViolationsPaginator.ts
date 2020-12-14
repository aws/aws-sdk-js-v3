import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListActiveViolationsCommand,
  ListActiveViolationsCommandInput,
  ListActiveViolationsCommandOutput,
} from "../commands/ListActiveViolationsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListActiveViolationsCommandInput,
  ...args: any
): Promise<ListActiveViolationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActiveViolationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListActiveViolationsCommandInput,
  ...args: any
): Promise<ListActiveViolationsCommandOutput> => {
  // @ts-ignore
  return await client.listActiveViolations(input, ...args);
};
export async function* paginateListActiveViolations(
  config: IoTPaginationConfiguration,
  input: ListActiveViolationsCommandInput,
  ...additionalArguments: any
): Paginator<ListActiveViolationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListActiveViolationsCommandOutput;
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
