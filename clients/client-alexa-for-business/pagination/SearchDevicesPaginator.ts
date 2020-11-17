import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchDevicesCommand,
  SearchDevicesCommandInput,
  SearchDevicesCommandOutput,
} from "../commands/SearchDevicesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchDevicesCommandInput,
  ...args: any
): Promise<SearchDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchDevicesCommand(input), ...args);
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: SearchDevicesCommandInput,
  ...args: any
): Promise<SearchDevicesCommandOutput> => {
  // @ts-ignore
  return await client.searchDevices(input, ...args);
};
export async function* paginateSearchDevices(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchDevicesCommandInput,
  ...additionalArguments: any
): Paginator<SearchDevicesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchDevicesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
