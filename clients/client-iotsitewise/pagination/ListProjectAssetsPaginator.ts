import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import {
  ListProjectAssetsCommand,
  ListProjectAssetsCommandInput,
  ListProjectAssetsCommandOutput,
} from "../commands/ListProjectAssetsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListProjectAssetsCommandInput,
  ...args: any
): Promise<ListProjectAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProjectAssetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListProjectAssetsCommandInput,
  ...args: any
): Promise<ListProjectAssetsCommandOutput> => {
  // @ts-ignore
  return await client.listProjectAssets(input, ...args);
};
export async function* listProjectAssetsPaginate(
  config: IoTSiteWisePaginationConfiguration,
  input: ListProjectAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListProjectAssetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListProjectAssetsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
