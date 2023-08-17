// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPreviewRotationShiftsCommand,
  ListPreviewRotationShiftsCommandInput,
  ListPreviewRotationShiftsCommandOutput,
} from "../commands/ListPreviewRotationShiftsCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMContactsClient,
  input: ListPreviewRotationShiftsCommandInput,
  ...args: any
): Promise<ListPreviewRotationShiftsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPreviewRotationShiftsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPreviewRotationShifts(
  config: SSMContactsPaginationConfiguration,
  input: ListPreviewRotationShiftsCommandInput,
  ...additionalArguments: any
): Paginator<ListPreviewRotationShiftsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPreviewRotationShiftsCommandOutput;
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
