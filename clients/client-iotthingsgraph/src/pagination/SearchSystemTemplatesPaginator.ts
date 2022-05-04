// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  SearchSystemTemplatesCommand,
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput,
} from "../commands/SearchSystemTemplatesCommand";
import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: SearchSystemTemplatesCommandInput,
  ...args: any
): Promise<SearchSystemTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchSystemTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: SearchSystemTemplatesCommandInput,
  ...args: any
): Promise<SearchSystemTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.searchSystemTemplates(input, ...args);
};
export async function* paginateSearchSystemTemplates(
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchSystemTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<SearchSystemTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchSystemTemplatesCommandOutput;
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
