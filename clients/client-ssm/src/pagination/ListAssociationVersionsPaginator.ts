// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssociationVersionsCommand,
  ListAssociationVersionsCommandInput,
  ListAssociationVersionsCommandOutput,
} from "../commands/ListAssociationVersionsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: ListAssociationVersionsCommandInput,
  ...args: any
): Promise<ListAssociationVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociationVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssociationVersions(
  config: SSMPaginationConfiguration,
  input: ListAssociationVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociationVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociationVersionsCommandOutput;
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
