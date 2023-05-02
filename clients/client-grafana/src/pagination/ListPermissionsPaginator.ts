// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "../commands/ListPermissionsCommand";
import { GrafanaClient } from "../GrafanaClient";
import { GrafanaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GrafanaClient,
  input: ListPermissionsCommandInput,
  ...args: any
): Promise<ListPermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPermissions(
  config: GrafanaPaginationConfiguration,
  input: ListPermissionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionsCommandOutput;
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
