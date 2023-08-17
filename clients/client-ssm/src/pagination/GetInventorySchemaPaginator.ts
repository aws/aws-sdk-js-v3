// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetInventorySchemaCommand,
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput,
} from "../commands/GetInventorySchemaCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: GetInventorySchemaCommandInput,
  ...args: any
): Promise<GetInventorySchemaCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInventorySchemaCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetInventorySchema(
  config: SSMPaginationConfiguration,
  input: GetInventorySchemaCommandInput,
  ...additionalArguments: any
): Paginator<GetInventorySchemaCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetInventorySchemaCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
