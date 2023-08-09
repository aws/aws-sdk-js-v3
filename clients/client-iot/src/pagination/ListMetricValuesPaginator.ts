// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListMetricValuesCommand,
  ListMetricValuesCommandInput,
  ListMetricValuesCommandOutput,
} from "../commands/ListMetricValuesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListMetricValuesCommandInput,
  ...args: any
): Promise<ListMetricValuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMetricValuesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMetricValues(
  config: IoTPaginationConfiguration,
  input: ListMetricValuesCommandInput,
  ...additionalArguments: any
): Paginator<ListMetricValuesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMetricValuesCommandOutput;
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
