// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListPartsCommand, ListPartsCommandInput, ListPartsCommandOutput } from "../commands/ListPartsCommand";
import { S3Client } from "../S3Client";
import { S3PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: S3Client,
  input: ListPartsCommandInput,
  ...args: any
): Promise<ListPartsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPartsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListParts(
  config: S3PaginationConfiguration,
  input: ListPartsCommandInput,
  ...additionalArguments: any
): Paginator<ListPartsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PartNumberMarker
  let token: typeof input.PartNumberMarker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPartsCommandOutput;
  while (hasNext) {
    input.PartNumberMarker = token;
    input["MaxParts"] = config.pageSize;
    if (config.client instanceof S3Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3 | S3Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextPartNumberMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
