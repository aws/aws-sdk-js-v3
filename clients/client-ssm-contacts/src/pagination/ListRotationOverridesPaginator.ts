// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRotationOverridesCommand,
  ListRotationOverridesCommandInput,
  ListRotationOverridesCommandOutput,
} from "../commands/ListRotationOverridesCommand";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMContactsClient,
  input: ListRotationOverridesCommandInput,
  ...args: any
): Promise<ListRotationOverridesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRotationOverridesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRotationOverrides(
  config: SSMContactsPaginationConfiguration,
  input: ListRotationOverridesCommandInput,
  ...additionalArguments: any
): Paginator<ListRotationOverridesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRotationOverridesCommandOutput;
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
