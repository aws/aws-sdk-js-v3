// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssetPropertiesCommand,
  ListAssetPropertiesCommandInput,
  ListAssetPropertiesCommandOutput,
} from "../commands/ListAssetPropertiesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListAssetPropertiesCommandInput,
  ...args: any
): Promise<ListAssetPropertiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssetPropertiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssetProperties(
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetPropertiesCommandInput,
  ...additionalArguments: any
): Paginator<ListAssetPropertiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssetPropertiesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
