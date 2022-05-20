// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCustomEntityTypesCommand,
  ListCustomEntityTypesCommandInput,
  ListCustomEntityTypesCommandOutput,
} from "../commands/ListCustomEntityTypesCommand";
import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: ListCustomEntityTypesCommandInput,
  ...args: any
): Promise<ListCustomEntityTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomEntityTypesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: ListCustomEntityTypesCommandInput,
  ...args: any
): Promise<ListCustomEntityTypesCommandOutput> => {
  // @ts-ignore
  return await client.listCustomEntityTypes(input, ...args);
};
export async function* paginateListCustomEntityTypes(
  config: GluePaginationConfiguration,
  input: ListCustomEntityTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomEntityTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomEntityTypesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
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
