import { AppConfig } from "../AppConfig";
import { AppConfigClient } from "../AppConfigClient";
import {
  ListDeploymentStrategiesCommand,
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
} from "../commands/ListDeploymentStrategiesCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AppConfigClient,
  input: ListDeploymentStrategiesCommandInput,
  ...args: any
): Promise<ListDeploymentStrategiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentStrategiesCommand(input), ...args);
};
const makePagedRequest = async (
  client: AppConfig,
  input: ListDeploymentStrategiesCommandInput,
  ...args: any
): Promise<ListDeploymentStrategiesCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentStrategies(input, ...args);
};
export async function* paginateListDeploymentStrategies(
  config: AppConfigPaginationConfiguration,
  input: ListDeploymentStrategiesCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentStrategiesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentStrategiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppConfig) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppConfigClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppConfig | AppConfigClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
