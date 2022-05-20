// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListGatewayGroupsCommand,
  ListGatewayGroupsCommandInput,
  ListGatewayGroupsCommandOutput,
} from "../commands/ListGatewayGroupsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListGatewayGroupsCommandInput,
  ...args: any
): Promise<ListGatewayGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGatewayGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListGatewayGroupsCommandInput,
  ...args: any
): Promise<ListGatewayGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listGatewayGroups(input, ...args);
};
export async function* paginateListGatewayGroups(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListGatewayGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewayGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGatewayGroupsCommandOutput;
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
