// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCustomDomainAssociationsCommand,
  ListCustomDomainAssociationsCommandInput,
  ListCustomDomainAssociationsCommandOutput,
} from "../commands/ListCustomDomainAssociationsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftServerlessClient,
  input: ListCustomDomainAssociationsCommandInput,
  ...args: any
): Promise<ListCustomDomainAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomDomainAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCustomDomainAssociations(
  config: RedshiftServerlessPaginationConfiguration,
  input: ListCustomDomainAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomDomainAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomDomainAssociationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RedshiftServerlessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RedshiftServerless | RedshiftServerlessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
