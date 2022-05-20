// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListServiceTemplateVersionsCommand,
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput,
} from "../commands/ListServiceTemplateVersionsCommand";
import { Proton } from "../Proton";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListServiceTemplateVersionsCommandInput,
  ...args: any
): Promise<ListServiceTemplateVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServiceTemplateVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Proton,
  input: ListServiceTemplateVersionsCommandInput,
  ...args: any
): Promise<ListServiceTemplateVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listServiceTemplateVersions(input, ...args);
};
export async function* paginateListServiceTemplateVersions(
  config: ProtonPaginationConfiguration,
  input: ListServiceTemplateVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListServiceTemplateVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServiceTemplateVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Proton) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ProtonClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Proton | ProtonClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
