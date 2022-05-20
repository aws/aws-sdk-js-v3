// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListStudioSessionMappingsCommand,
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
} from "../commands/ListStudioSessionMappingsCommand";
import { EMR } from "../EMR";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListStudioSessionMappingsCommandInput,
  ...args: any
): Promise<ListStudioSessionMappingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStudioSessionMappingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EMR,
  input: ListStudioSessionMappingsCommandInput,
  ...args: any
): Promise<ListStudioSessionMappingsCommandOutput> => {
  // @ts-ignore
  return await client.listStudioSessionMappings(input, ...args);
};
export async function* paginateListStudioSessionMappings(
  config: EMRPaginationConfiguration,
  input: ListStudioSessionMappingsCommandInput,
  ...additionalArguments: any
): Paginator<ListStudioSessionMappingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStudioSessionMappingsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
