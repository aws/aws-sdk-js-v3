// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetPartitionsCommand,
  GetPartitionsCommandInput,
  GetPartitionsCommandOutput,
} from "../commands/GetPartitionsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetPartitionsCommandInput,
  ...args: any
): Promise<GetPartitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetPartitionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetPartitions(
  config: GluePaginationConfiguration,
  input: GetPartitionsCommandInput,
  ...additionalArguments: any
): Paginator<GetPartitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetPartitionsCommandOutput;
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
