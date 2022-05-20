// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListSmartHomeAppliancesCommand,
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
} from "../commands/ListSmartHomeAppliancesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListSmartHomeAppliancesCommandInput,
  ...args: any
): Promise<ListSmartHomeAppliancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSmartHomeAppliancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListSmartHomeAppliancesCommandInput,
  ...args: any
): Promise<ListSmartHomeAppliancesCommandOutput> => {
  // @ts-ignore
  return await client.listSmartHomeAppliances(input, ...args);
};
export async function* paginateListSmartHomeAppliances(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSmartHomeAppliancesCommandInput,
  ...additionalArguments: any
): Paginator<ListSmartHomeAppliancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSmartHomeAppliancesCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
