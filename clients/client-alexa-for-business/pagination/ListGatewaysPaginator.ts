import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "../commands/ListGatewaysCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListGatewaysCommandInput,
  ...args: any
): Promise<ListGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGatewaysCommand(input, ...args));
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListGatewaysCommandInput,
  ...args: any
): Promise<ListGatewaysCommandOutput> => {
  // @ts-ignore
  return await client.listGateways(input, ...args);
};
export async function* listGatewaysPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListGatewaysCommandInput,
  ...additionalArguments: any
): Paginator<ListGatewaysCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListGatewaysCommandOutput;
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
