import { AppConfig } from "../AppConfig";
import { AppConfigClient } from "../AppConfigClient";
import {
  ListHostedConfigurationVersionsCommand,
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "../commands/ListHostedConfigurationVersionsCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppConfigClient,
  input: ListHostedConfigurationVersionsCommandInput,
  ...args: any
): Promise<ListHostedConfigurationVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHostedConfigurationVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppConfig,
  input: ListHostedConfigurationVersionsCommandInput,
  ...args: any
): Promise<ListHostedConfigurationVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listHostedConfigurationVersions(input, ...args);
};
export async function* paginateListHostedConfigurationVersions(
  config: AppConfigPaginationConfiguration,
  input: ListHostedConfigurationVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListHostedConfigurationVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHostedConfigurationVersionsCommandOutput;
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
