// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRulesPackagesCommand,
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput,
} from "../commands/ListRulesPackagesCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListRulesPackagesCommandInput,
  ...args: any
): Promise<ListRulesPackagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRulesPackagesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRulesPackages(
  config: InspectorPaginationConfiguration,
  input: ListRulesPackagesCommandInput,
  ...additionalArguments: any
): Paginator<ListRulesPackagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRulesPackagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof InspectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector | InspectorClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
