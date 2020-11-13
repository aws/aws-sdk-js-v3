import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import {
  GetAssetPropertyAggregatesCommand,
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
} from "../commands/GetAssetPropertyAggregatesCommand";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: GetAssetPropertyAggregatesCommandInput,
  ...args: any
): Promise<GetAssetPropertyAggregatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAssetPropertyAggregatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoTSiteWise,
  input: GetAssetPropertyAggregatesCommandInput,
  ...args: any
): Promise<GetAssetPropertyAggregatesCommandOutput> => {
  // @ts-ignore
  return await client.getAssetPropertyAggregates(input, ...args);
};
export async function* getAssetPropertyAggregatesPaginate(
  config: IoTSiteWisePaginationConfiguration,
  input: GetAssetPropertyAggregatesCommandInput,
  ...additionalArguments: any
): Paginator<GetAssetPropertyAggregatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAssetPropertyAggregatesCommandOutput;
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
