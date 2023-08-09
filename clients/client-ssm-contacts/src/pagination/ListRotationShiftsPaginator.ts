// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRotationShiftsCommand,
  ListRotationShiftsCommandInput,
  ListRotationShiftsCommandOutput,
} from "../commands/ListRotationShiftsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMContactsClient,
  input: ListRotationShiftsCommandInput,
  ...args: any
): Promise<ListRotationShiftsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRotationShiftsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRotationShifts(
  config: SSMContactsPaginationConfiguration,
  input: ListRotationShiftsCommandInput,
  ...additionalArguments: any
): Paginator<ListRotationShiftsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRotationShiftsCommandOutput;
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
