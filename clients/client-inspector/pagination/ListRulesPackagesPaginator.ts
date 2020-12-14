import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import {
  ListRulesPackagesCommand,
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput,
} from "../commands/ListRulesPackagesCommand";
import { InspectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Inspector,
  input: ListRulesPackagesCommandInput,
  ...args: any
): Promise<ListRulesPackagesCommandOutput> => {
  // @ts-ignore
  return await client.listRulesPackages(input, ...args);
};
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
    if (config.client instanceof Inspector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof InspectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector | InspectorClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
