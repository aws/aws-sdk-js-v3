// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  SearchSystemInstancesCommand,
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput,
} from "../commands/SearchSystemInstancesCommand";
import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: SearchSystemInstancesCommandInput,
  ...args: any
): Promise<SearchSystemInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchSystemInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: SearchSystemInstancesCommandInput,
  ...args: any
): Promise<SearchSystemInstancesCommandOutput> => {
  // @ts-ignore
  return await client.searchSystemInstances(input, ...args);
};
export async function* paginateSearchSystemInstances(
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchSystemInstancesCommandInput,
  ...additionalArguments: any
): Paginator<SearchSystemInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchSystemInstancesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTThingsGraph) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTThingsGraphClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTThingsGraph | IoTThingsGraphClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
