// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListPartsCommand, ListPartsCommandInput, ListPartsCommandOutput } from "../commands/ListPartsCommand";
import { Glacier } from "../Glacier";
import { GlacierClient } from "../GlacierClient";
import { GlacierPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlacierClient,
  input: ListPartsCommandInput,
  ...args: any
): Promise<ListPartsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPartsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glacier,
  input: ListPartsCommandInput,
  ...args: any
): Promise<ListPartsCommandOutput> => {
  // @ts-ignore
  return await client.listParts(input, ...args);
};
export async function* paginateListParts(
  config: GlacierPaginationConfiguration,
  input: ListPartsCommandInput,
  ...additionalArguments: any
): Paginator<ListPartsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPartsCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof Glacier) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlacierClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glacier | GlacierClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
