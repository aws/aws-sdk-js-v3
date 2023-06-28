// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRotationsCommand,
  ListRotationsCommandInput,
  ListRotationsCommandOutput,
} from "../commands/ListRotationsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMContactsClient,
  input: ListRotationsCommandInput,
  ...args: any
): Promise<ListRotationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRotationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRotations(
  config: SSMContactsPaginationConfiguration,
  input: ListRotationsCommandInput,
  ...additionalArguments: any
): Paginator<ListRotationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRotationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMContactsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSMContacts | SSMContactsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
