// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSubjectsCommand,
  ListSubjectsCommandInput,
  ListSubjectsCommandOutput,
} from "../commands/ListSubjectsCommand";
import { RolesAnywhere } from "../RolesAnywhere";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RolesAnywhereClient,
  input: ListSubjectsCommandInput,
  ...args: any
): Promise<ListSubjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubjectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RolesAnywhere,
  input: ListSubjectsCommandInput,
  ...args: any
): Promise<ListSubjectsCommandOutput> => {
  // @ts-ignore
  return await client.listSubjects(input, ...args);
};
export async function* paginateListSubjects(
  config: RolesAnywherePaginationConfiguration,
  input: ListSubjectsCommandInput,
  ...additionalArguments: any
): Paginator<ListSubjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSubjectsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof RolesAnywhere) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RolesAnywhereClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RolesAnywhere | RolesAnywhereClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
