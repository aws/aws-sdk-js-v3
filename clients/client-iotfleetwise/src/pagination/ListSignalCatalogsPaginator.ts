// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSignalCatalogsCommand,
  ListSignalCatalogsCommandInput,
  ListSignalCatalogsCommandOutput,
} from "../commands/ListSignalCatalogsCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTFleetWiseClient,
  input: ListSignalCatalogsCommandInput,
  ...args: any
): Promise<ListSignalCatalogsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSignalCatalogsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSignalCatalogs(
  config: IoTFleetWisePaginationConfiguration,
  input: ListSignalCatalogsCommandInput,
  ...additionalArguments: any
): Paginator<ListSignalCatalogsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSignalCatalogsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTFleetWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTFleetWise | IoTFleetWiseClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
