// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListConfigurationProfilesCommand,
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "../commands/ListConfigurationProfilesCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppConfigClient,
  input: ListConfigurationProfilesCommandInput,
  ...args: any
): Promise<ListConfigurationProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigurationProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConfigurationProfiles(
  config: AppConfigPaginationConfiguration,
  input: ListConfigurationProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfigurationProfilesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppConfigClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppConfig | AppConfigClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
