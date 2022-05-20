// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListNetworkSettingsCommand,
  ListNetworkSettingsCommandInput,
  ListNetworkSettingsCommandOutput,
} from "../commands/ListNetworkSettingsCommand";
import { WorkSpacesWeb } from "../WorkSpacesWeb";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkSpacesWebClient,
  input: ListNetworkSettingsCommandInput,
  ...args: any
): Promise<ListNetworkSettingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNetworkSettingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkSpacesWeb,
  input: ListNetworkSettingsCommandInput,
  ...args: any
): Promise<ListNetworkSettingsCommandOutput> => {
  // @ts-ignore
  return await client.listNetworkSettings(input, ...args);
};
export async function* paginateListNetworkSettings(
  config: WorkSpacesWebPaginationConfiguration,
  input: ListNetworkSettingsCommandInput,
  ...additionalArguments: any
): Paginator<ListNetworkSettingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNetworkSettingsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof WorkSpacesWeb) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkSpacesWebClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkSpacesWeb | WorkSpacesWebClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
