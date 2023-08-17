// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListAddonsCommand, ListAddonsCommandInput, ListAddonsCommandOutput } from "../commands/ListAddonsCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: ListAddonsCommandInput,
  ...args: any
): Promise<ListAddonsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAddonsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAddons(
  config: EKSPaginationConfiguration,
  input: ListAddonsCommandInput,
  ...additionalArguments: any
): Paginator<ListAddonsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAddonsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
