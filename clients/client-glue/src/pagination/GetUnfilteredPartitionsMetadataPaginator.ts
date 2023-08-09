// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetUnfilteredPartitionsMetadataCommand,
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput,
} from "../commands/GetUnfilteredPartitionsMetadataCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetUnfilteredPartitionsMetadataCommandInput,
  ...args: any
): Promise<GetUnfilteredPartitionsMetadataCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUnfilteredPartitionsMetadataCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetUnfilteredPartitionsMetadata(
  config: GluePaginationConfiguration,
  input: GetUnfilteredPartitionsMetadataCommandInput,
  ...additionalArguments: any
): Paginator<GetUnfilteredPartitionsMetadataCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetUnfilteredPartitionsMetadataCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
