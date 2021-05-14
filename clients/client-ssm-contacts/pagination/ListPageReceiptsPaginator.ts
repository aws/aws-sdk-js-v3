import { SSMContacts } from "../SSMContacts";
import { SSMContactsClient } from "../SSMContactsClient";
import {
  ListPageReceiptsCommand,
  ListPageReceiptsCommandInput,
  ListPageReceiptsCommandOutput,
} from "../commands/ListPageReceiptsCommand";
import { SSMContactsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMContactsClient,
  input: ListPageReceiptsCommandInput,
  ...args: any
): Promise<ListPageReceiptsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPageReceiptsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSMContacts,
  input: ListPageReceiptsCommandInput,
  ...args: any
): Promise<ListPageReceiptsCommandOutput> => {
  // @ts-ignore
  return await client.listPageReceipts(input, ...args);
};
export async function* paginateListPageReceipts(
  config: SSMContactsPaginationConfiguration,
  input: ListPageReceiptsCommandInput,
  ...additionalArguments: any
): Paginator<ListPageReceiptsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPageReceiptsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMContacts) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMContactsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSMContacts | SSMContactsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
