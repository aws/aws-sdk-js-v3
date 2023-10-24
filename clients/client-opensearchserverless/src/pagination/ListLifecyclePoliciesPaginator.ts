// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListLifecyclePoliciesCommand,
  ListLifecyclePoliciesCommandInput,
  ListLifecyclePoliciesCommandOutput,
} from "../commands/ListLifecyclePoliciesCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OpenSearchServerlessClient,
  input: ListLifecyclePoliciesCommandInput,
  ...args: any
): Promise<ListLifecyclePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLifecyclePoliciesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLifecyclePolicies(
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListLifecyclePoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListLifecyclePoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLifecyclePoliciesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof OpenSearchServerlessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearchServerless | OpenSearchServerlessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
