// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssociatedAssetsCommand,
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
} from "../commands/ListAssociatedAssetsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListAssociatedAssetsCommandInput,
  ...args: any
): Promise<ListAssociatedAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedAssetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssociatedAssets(
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssociatedAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedAssetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociatedAssetsCommandOutput;
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
