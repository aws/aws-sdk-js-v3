// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSubjectsCommand,
  ListSubjectsCommandInput,
  ListSubjectsCommandOutput,
} from "../commands/ListSubjectsCommand";
import { RolesAnywhereClient } from "../RolesAnywhereClient";
import { RolesAnywherePaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof RolesAnywhereClient) {
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
