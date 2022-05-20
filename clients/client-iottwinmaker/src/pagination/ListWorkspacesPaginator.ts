// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "../commands/ListWorkspacesCommand";
import { IoTTwinMaker } from "../IoTTwinMaker";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";
import { IoTTwinMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTTwinMakerClient,
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
  client: IoTTwinMaker,
  input: ListWorkspacesCommandInput,
  ...args: any
): Promise<ListWorkspacesCommandOutput> => {
  // @ts-ignore
  return await client.listWorkspaces(input, ...args);
};
export async function* paginateListWorkspaces(
  config: IoTTwinMakerPaginationConfiguration,
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
    if (config.client instanceof IoTTwinMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTTwinMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTTwinMaker | IoTTwinMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
