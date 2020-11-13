import { Imagebuilder } from "../Imagebuilder";
import { ImagebuilderClient } from "../ImagebuilderClient";
import {
  ListInfrastructureConfigurationsCommand,
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput,
} from "../commands/ListInfrastructureConfigurationsCommand";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListInfrastructureConfigurationsCommandInput,
  ...args: any
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInfrastructureConfigurationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Imagebuilder,
  input: ListInfrastructureConfigurationsCommandInput,
  ...args: any
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listInfrastructureConfigurations(input, ...args);
};
export async function* listInfrastructureConfigurationsPaginate(
  config: ImagebuilderPaginationConfiguration,
  input: ListInfrastructureConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListInfrastructureConfigurationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInfrastructureConfigurationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Imagebuilder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ImagebuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
