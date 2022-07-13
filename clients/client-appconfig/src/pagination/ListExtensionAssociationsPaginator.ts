// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AppConfig } from "../AppConfig";
import { AppConfigClient } from "../AppConfigClient";
import {
  ListExtensionAssociationsCommand,
  ListExtensionAssociationsCommandInput,
  ListExtensionAssociationsCommandOutput,
} from "../commands/ListExtensionAssociationsCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppConfigClient,
  input: ListExtensionAssociationsCommandInput,
  ...args: any
): Promise<ListExtensionAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExtensionAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppConfig,
  input: ListExtensionAssociationsCommandInput,
  ...args: any
): Promise<ListExtensionAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listExtensionAssociations(input, ...args);
};
export async function* paginateListExtensionAssociations(
  config: AppConfigPaginationConfiguration,
  input: ListExtensionAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListExtensionAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExtensionAssociationsCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
