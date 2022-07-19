// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMonitoredResourcesCommand,
  ListMonitoredResourcesCommandInput,
  ListMonitoredResourcesCommandOutput,
} from "../commands/ListMonitoredResourcesCommand";
import { DevOpsGuru } from "../DevOpsGuru";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: ListMonitoredResourcesCommandInput,
  ...args: any
): Promise<ListMonitoredResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMonitoredResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DevOpsGuru,
  input: ListMonitoredResourcesCommandInput,
  ...args: any
): Promise<ListMonitoredResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listMonitoredResources(input, ...args);
};
export async function* paginateListMonitoredResources(
  config: DevOpsGuruPaginationConfiguration,
  input: ListMonitoredResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListMonitoredResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMonitoredResourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DevOpsGuru) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DevOpsGuruClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
