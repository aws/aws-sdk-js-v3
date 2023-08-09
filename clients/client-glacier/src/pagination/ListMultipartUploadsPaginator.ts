// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListMultipartUploadsCommand,
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "../commands/ListMultipartUploadsCommand";
import { GlacierClient } from "../GlacierClient";
import { GlacierPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlacierClient,
  input: ListMultipartUploadsCommandInput,
  ...args: any
): Promise<ListMultipartUploadsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMultipartUploadsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMultipartUploads(
  config: GlacierPaginationConfiguration,
  input: ListMultipartUploadsCommandInput,
  ...additionalArguments: any
): Paginator<ListMultipartUploadsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMultipartUploadsCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof GlacierClient) {
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
