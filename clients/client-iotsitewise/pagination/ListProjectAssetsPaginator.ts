import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import {
  ListProjectAssetsCommand,
  ListProjectAssetsCommandInput,
  ListProjectAssetsCommandOutput,
} from "../commands/ListProjectAssetsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListProjectAssetsCommandInput,
  ...args: any
): Promise<ListProjectAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProjectAssetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListProjectAssetsCommandInput,
  ...args: any
): Promise<ListProjectAssetsCommandOutput> => {
  // @ts-ignore
  return await client.listProjectAssets(input, ...args);
};
export async function* paginateListProjectAssets(
  config: IoTSiteWisePaginationConfiguration,
  input: ListProjectAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListProjectAssetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProjectAssetsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
