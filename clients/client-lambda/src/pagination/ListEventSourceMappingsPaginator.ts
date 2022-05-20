// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEventSourceMappingsCommand,
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
} from "../commands/ListEventSourceMappingsCommand";
import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListEventSourceMappingsCommandInput,
  ...args: any
): Promise<ListEventSourceMappingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventSourceMappingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Lambda,
  input: ListEventSourceMappingsCommandInput,
  ...args: any
): Promise<ListEventSourceMappingsCommandOutput> => {
  // @ts-ignore
  return await client.listEventSourceMappings(input, ...args);
};
export async function* paginateListEventSourceMappings(
  config: LambdaPaginationConfiguration,
  input: ListEventSourceMappingsCommandInput,
  ...additionalArguments: any
): Paginator<ListEventSourceMappingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventSourceMappingsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Lambda) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LambdaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Lambda | LambdaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
