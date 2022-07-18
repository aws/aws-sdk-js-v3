// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRetirableGrantsCommand,
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput,
} from "../commands/ListRetirableGrantsCommand";
import { KMS } from "../KMS";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KMSClient,
  input: ListRetirableGrantsCommandInput,
  ...args: any
): Promise<ListRetirableGrantsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRetirableGrantsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: KMS,
  input: ListRetirableGrantsCommandInput,
  ...args: any
): Promise<ListRetirableGrantsCommandOutput> => {
  // @ts-ignore
  return await client.listRetirableGrants(input, ...args);
};
export async function* paginateListRetirableGrants(
  config: KMSPaginationConfiguration,
  input: ListRetirableGrantsCommandInput,
  ...additionalArguments: any
): Paginator<ListRetirableGrantsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRetirableGrantsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof KMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KMS | KMSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
