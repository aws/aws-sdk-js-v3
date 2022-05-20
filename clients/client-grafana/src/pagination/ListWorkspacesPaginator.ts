// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "../commands/ListWorkspacesCommand";
import { Grafana } from "../Grafana";
import { GrafanaClient } from "../GrafanaClient";
import { GrafanaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GrafanaClient,
  input: ListWorkspacesCommandInput,
  ...args: any
): Promise<ListWorkspacesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkspacesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Grafana,
  input: ListWorkspacesCommandInput,
  ...args: any
): Promise<ListWorkspacesCommandOutput> => {
  // @ts-ignore
  return await client.listWorkspaces(input, ...args);
};
export async function* paginateListWorkspaces(
  config: GrafanaPaginationConfiguration,
  input: ListWorkspacesCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkspacesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkspacesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Grafana) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GrafanaClient) {
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
