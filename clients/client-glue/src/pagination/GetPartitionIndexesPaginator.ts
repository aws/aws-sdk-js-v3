// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetPartitionIndexesCommand,
  GetPartitionIndexesCommandInput,
  GetPartitionIndexesCommandOutput,
} from "../commands/GetPartitionIndexesCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetPartitionIndexesCommandInput,
  ...args: any
): Promise<GetPartitionIndexesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetPartitionIndexesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetPartitionIndexes(
  config: GluePaginationConfiguration,
  input: GetPartitionIndexesCommandInput,
  ...additionalArguments: any
): Paginator<GetPartitionIndexesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetPartitionIndexesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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
