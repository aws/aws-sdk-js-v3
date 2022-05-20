// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetResourceShareAssociationsCommand,
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
} from "../commands/GetResourceShareAssociationsCommand";
import { RAM } from "../RAM";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RAMClient,
  input: GetResourceShareAssociationsCommandInput,
  ...args: any
): Promise<GetResourceShareAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourceShareAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RAM,
  input: GetResourceShareAssociationsCommandInput,
  ...args: any
): Promise<GetResourceShareAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.getResourceShareAssociations(input, ...args);
};
export async function* paginateGetResourceShareAssociations(
  config: RAMPaginationConfiguration,
  input: GetResourceShareAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<GetResourceShareAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetResourceShareAssociationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
