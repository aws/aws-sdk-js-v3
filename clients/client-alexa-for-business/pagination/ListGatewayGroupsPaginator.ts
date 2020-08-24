import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListGatewayGroupsCommand,
  ListGatewayGroupsCommandInput,
  ListGatewayGroupsCommandOutput,
} from "../commands/ListGatewayGroupsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListGatewayGroupsCommandInput,
  ...args: any
): Promise<ListGatewayGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGatewayGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListGatewayGroupsCommandInput,
  ...args: any
): Promise<ListGatewayGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listGatewayGroups(input, ...args);
};
export async function* listGatewayGroupsPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListGatewayGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewayGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListGatewayGroupsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
