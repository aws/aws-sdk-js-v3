// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEnvironmentTemplatesCommand,
  ListEnvironmentTemplatesCommandInput,
  ListEnvironmentTemplatesCommandOutput,
} from "../commands/ListEnvironmentTemplatesCommand";
import { Proton } from "../Proton";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListEnvironmentTemplatesCommandInput,
  ...args: any
): Promise<ListEnvironmentTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEnvironmentTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Proton,
  input: ListEnvironmentTemplatesCommandInput,
  ...args: any
): Promise<ListEnvironmentTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listEnvironmentTemplates(input, ...args);
};
export async function* paginateListEnvironmentTemplates(
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListEnvironmentTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEnvironmentTemplatesCommandOutput;
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
