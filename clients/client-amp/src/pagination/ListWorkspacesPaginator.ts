// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Amp } from "../Amp";
import { AmpClient } from "../AmpClient";
import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "../commands/ListWorkspacesCommand";
import { AmpPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AmpClient,
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
  client: Amp,
  input: ListWorkspacesCommandInput,
  ...args: any
): Promise<ListWorkspacesCommandOutput> => {
  // @ts-ignore
  return await client.listWorkspaces(input, ...args);
};
export async function* paginateListWorkspaces(
  config: AmpPaginationConfiguration,
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
    if (config.client instanceof Amp) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AmpClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Amp | AmpClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
