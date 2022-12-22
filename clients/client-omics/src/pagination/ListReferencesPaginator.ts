// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListReferencesCommand,
  ListReferencesCommandInput,
  ListReferencesCommandOutput,
} from "../commands/ListReferencesCommand";
import { Omics } from "../Omics";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListReferencesCommandInput,
  ...args: any
): Promise<ListReferencesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReferencesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Omics,
  input: ListReferencesCommandInput,
  ...args: any
): Promise<ListReferencesCommandOutput> => {
  // @ts-ignore
  return await client.listReferences(input, ...args);
};
export async function* paginateListReferences(
  config: OmicsPaginationConfiguration,
  input: ListReferencesCommandInput,
  ...additionalArguments: any
): Paginator<ListReferencesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReferencesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Omics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OmicsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Omics | OmicsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
