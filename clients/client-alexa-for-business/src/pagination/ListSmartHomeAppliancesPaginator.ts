// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListSmartHomeAppliancesCommand,
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
} from "../commands/ListSmartHomeAppliancesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof AlexaForBusinessClient) {
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
