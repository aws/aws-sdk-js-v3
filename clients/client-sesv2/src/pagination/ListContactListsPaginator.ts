// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListContactListsCommand,
  ListContactListsCommandInput,
  ListContactListsCommandOutput,
} from "../commands/ListContactListsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListContactListsCommandInput,
  ...args: any
): Promise<ListContactListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContactListsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListContactLists(
  config: SESv2PaginationConfiguration,
  input: ListContactListsCommandInput,
  ...additionalArguments: any
): Paginator<ListContactListsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContactListsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof SESv2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SESv2 | SESv2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
