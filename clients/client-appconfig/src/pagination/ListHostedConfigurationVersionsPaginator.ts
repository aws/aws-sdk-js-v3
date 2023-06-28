// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListHostedConfigurationVersionsCommand,
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "../commands/ListHostedConfigurationVersionsCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
