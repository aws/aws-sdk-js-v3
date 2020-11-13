import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import {
  ListAssetModelsCommand,
  ListAssetModelsCommandInput,
  ListAssetModelsCommandOutput,
} from "../commands/ListAssetModelsCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListAssetModelsCommandInput,
  ...args: any
): Promise<ListAssetModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssetModelsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListAssetModelsCommandInput,
  ...args: any
): Promise<ListAssetModelsCommandOutput> => {
  // @ts-ignore
  return await client.listAssetModels(input, ...args);
};
export async function* listAssetModelsPaginate(
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetModelsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssetModelsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssetModelsCommandOutput;
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
