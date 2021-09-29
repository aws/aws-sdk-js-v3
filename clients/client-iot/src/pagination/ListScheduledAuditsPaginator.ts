import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListScheduledAuditsCommand,
  ListScheduledAuditsCommandInput,
  ListScheduledAuditsCommandOutput,
} from "../commands/ListScheduledAuditsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListScheduledAuditsCommandInput,
  ...args: any
): Promise<ListScheduledAuditsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListScheduledAuditsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListScheduledAuditsCommandInput,
  ...args: any
): Promise<ListScheduledAuditsCommandOutput> => {
  // @ts-ignore
  return await client.listScheduledAudits(input, ...args);
};
export async function* paginateListScheduledAudits(
  config: IoTPaginationConfiguration,
  input: ListScheduledAuditsCommandInput,
  ...additionalArguments: any
): Paginator<ListScheduledAuditsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListScheduledAuditsCommandOutput;
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
