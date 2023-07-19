// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListVersionsCommand,
  ListVersionsCommandInput,
  ListVersionsCommandOutput,
} from "../commands/ListVersionsCommand";
import { GrafanaClient } from "../GrafanaClient";
import { GrafanaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GrafanaClient,
  input: ListVersionsCommandInput,
  ...args: any
): Promise<ListVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListVersions(
  config: GrafanaPaginationConfiguration,
  input: ListVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof GrafanaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Grafana | GrafanaClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
