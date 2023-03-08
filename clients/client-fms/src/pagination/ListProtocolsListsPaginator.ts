// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListProtocolsListsCommand,
  ListProtocolsListsCommandInput,
  ListProtocolsListsCommandOutput,
} from "../commands/ListProtocolsListsCommand";
import { FMSClient } from "../FMSClient";
import { FMSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FMSClient,
  input: ListProtocolsListsCommandInput,
  ...args: any
): Promise<ListProtocolsListsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProtocolsListsCommand(input), ...args);
};
export async function* paginateListProtocolsLists(
  config: FMSPaginationConfiguration,
  input: ListProtocolsListsCommandInput,
  ...additionalArguments: any
): Paginator<ListProtocolsListsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProtocolsListsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FMS | FMSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
