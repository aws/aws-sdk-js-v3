import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListAssetsCommandInput,
  ...args: any
): Promise<ListAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListAssetsCommandInput,
  ...args: any
): Promise<ListAssetsCommandOutput> => {
  // @ts-ignore
  return await client.listAssets(input, ...args);
};
export async function* listAssetsPaginate(
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssetsCommandOutput;
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
