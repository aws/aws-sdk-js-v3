import { AppConfig } from "../AppConfig";
import { AppConfigClient } from "../AppConfigClient";
import {
  ListConfigurationProfilesCommand,
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "../commands/ListConfigurationProfilesCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AppConfigClient,
  input: ListConfigurationProfilesCommandInput,
  ...args: any
): Promise<ListConfigurationProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigurationProfilesCommand(input), ...args);
};
const makePagedRequest = async (
  client: AppConfig,
  input: ListConfigurationProfilesCommandInput,
  ...args: any
): Promise<ListConfigurationProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listConfigurationProfiles(input, ...args);
};
export async function* listConfigurationProfilesPaginate(
  config: AppConfigPaginationConfiguration,
  input: ListConfigurationProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfigurationProfilesCommandOutput;
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
