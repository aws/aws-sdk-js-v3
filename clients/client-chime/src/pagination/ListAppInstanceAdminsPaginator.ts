// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListAppInstanceAdminsCommand,
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
} from "../commands/ListAppInstanceAdminsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListAppInstanceAdminsCommandInput,
  ...args: any
): Promise<ListAppInstanceAdminsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppInstanceAdminsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAppInstanceAdmins(
  config: ChimePaginationConfiguration,
  input: ListAppInstanceAdminsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppInstanceAdminsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppInstanceAdminsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
