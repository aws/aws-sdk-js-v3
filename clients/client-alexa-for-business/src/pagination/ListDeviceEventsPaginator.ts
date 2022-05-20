// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListDeviceEventsCommand,
  ListDeviceEventsCommandInput,
  ListDeviceEventsCommandOutput,
} from "../commands/ListDeviceEventsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListDeviceEventsCommandInput,
  ...args: any
): Promise<ListDeviceEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeviceEventsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListDeviceEventsCommandInput,
  ...args: any
): Promise<ListDeviceEventsCommandOutput> => {
  // @ts-ignore
  return await client.listDeviceEvents(input, ...args);
};
export async function* paginateListDeviceEvents(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListDeviceEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeviceEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeviceEventsCommandOutput;
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
