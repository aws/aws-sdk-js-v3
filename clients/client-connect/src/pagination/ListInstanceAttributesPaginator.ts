// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListInstanceAttributesCommand,
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput,
} from "../commands/ListInstanceAttributesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListInstanceAttributesCommandInput,
  ...args: any
): Promise<ListInstanceAttributesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceAttributesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListInstanceAttributes(
  config: ConnectPaginationConfiguration,
  input: ListInstanceAttributesCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceAttributesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceAttributesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
