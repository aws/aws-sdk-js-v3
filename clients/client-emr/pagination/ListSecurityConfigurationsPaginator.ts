import { EMR } from "../EMR";
import { EMRClient } from "../EMRClient";
import {
  ListSecurityConfigurationsCommand,
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "../commands/ListSecurityConfigurationsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EMRClient,
  input: ListSecurityConfigurationsCommandInput,
  ...args: any
): Promise<ListSecurityConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecurityConfigurationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: EMR,
  input: ListSecurityConfigurationsCommandInput,
  ...args: any
): Promise<ListSecurityConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listSecurityConfigurations(input, ...args);
};
export async function* listSecurityConfigurationsPaginate(
  config: EMRPaginationConfiguration,
  input: ListSecurityConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSecurityConfigurationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecurityConfigurationsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
