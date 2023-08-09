// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListLoggingConfigurationsCommand,
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "../commands/ListLoggingConfigurationsCommand";
import { IvschatClient } from "../IvschatClient";
import { IvschatPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IvschatClient,
  input: ListLoggingConfigurationsCommandInput,
  ...args: any
): Promise<ListLoggingConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLoggingConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLoggingConfigurations(
  config: IvschatPaginationConfiguration,
  input: ListLoggingConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListLoggingConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLoggingConfigurationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IvschatClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Ivschat | IvschatClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
