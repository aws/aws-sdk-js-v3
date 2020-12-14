import { IoTThingsGraph } from "../IoTThingsGraph";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import {
  SearchEntitiesCommand,
  SearchEntitiesCommandInput,
  SearchEntitiesCommandOutput,
} from "../commands/SearchEntitiesCommand";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: SearchEntitiesCommandInput,
  ...args: any
): Promise<SearchEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchEntitiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTThingsGraph,
  input: SearchEntitiesCommandInput,
  ...args: any
): Promise<SearchEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.searchEntities(input, ...args);
};
export async function* paginateSearchEntities(
  config: IoTThingsGraphPaginationConfiguration,
  input: SearchEntitiesCommandInput,
  ...additionalArguments: any
): Paginator<SearchEntitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchEntitiesCommandOutput;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
