// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStorageConfigurationsCommand,
  ListStorageConfigurationsCommandInput,
  ListStorageConfigurationsCommandOutput,
} from "../commands/ListStorageConfigurationsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IVSRealTimeClient,
  input: ListStorageConfigurationsCommandInput,
  ...args: any
): Promise<ListStorageConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStorageConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStorageConfigurations(
  config: IVSRealTimePaginationConfiguration,
  input: ListStorageConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListStorageConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStorageConfigurationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IVSRealTimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IVSRealTime | IVSRealTimeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
