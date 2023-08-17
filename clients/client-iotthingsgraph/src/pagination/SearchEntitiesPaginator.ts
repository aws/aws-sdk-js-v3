// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchEntitiesCommand,
  SearchEntitiesCommandInput,
  SearchEntitiesCommandOutput,
} from "../commands/SearchEntitiesCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof IoTThingsGraphClient) {
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
