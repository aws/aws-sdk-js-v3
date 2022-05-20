// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListBrowserSettingsCommand,
  ListBrowserSettingsCommandInput,
  ListBrowserSettingsCommandOutput,
} from "../commands/ListBrowserSettingsCommand";
import { WorkSpacesWeb } from "../WorkSpacesWeb";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkSpacesWebClient,
  input: ListBrowserSettingsCommandInput,
  ...args: any
): Promise<ListBrowserSettingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBrowserSettingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkSpacesWeb,
  input: ListBrowserSettingsCommandInput,
  ...args: any
): Promise<ListBrowserSettingsCommandOutput> => {
  // @ts-ignore
  return await client.listBrowserSettings(input, ...args);
};
export async function* paginateListBrowserSettings(
  config: WorkSpacesWebPaginationConfiguration,
  input: ListBrowserSettingsCommandInput,
  ...additionalArguments: any
): Paginator<ListBrowserSettingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBrowserSettingsCommandOutput;
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
