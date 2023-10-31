// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AmplifyClient } from "../AmplifyClient";
import {
  ListDomainAssociationsCommand,
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput,
} from "../commands/ListDomainAssociationsCommand";
import { AmplifyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AmplifyClient,
  input: ListDomainAssociationsCommandInput,
  ...args: any
): Promise<ListDomainAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDomainAssociations(
  config: AmplifyPaginationConfiguration,
  input: ListDomainAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDomainAssociationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AmplifyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Amplify | AmplifyClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
