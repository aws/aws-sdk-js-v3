// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListLFTagsCommand, ListLFTagsCommandInput, ListLFTagsCommandOutput } from "../commands/ListLFTagsCommand";
import { LakeFormation } from "../LakeFormation";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LakeFormationClient,
  input: ListLFTagsCommandInput,
  ...args: any
): Promise<ListLFTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLFTagsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LakeFormation,
  input: ListLFTagsCommandInput,
  ...args: any
): Promise<ListLFTagsCommandOutput> => {
  // @ts-ignore
  return await client.listLFTags(input, ...args);
};
export async function* paginateListLFTags(
  config: LakeFormationPaginationConfiguration,
  input: ListLFTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListLFTagsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLFTagsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LakeFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LakeFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LakeFormation | LakeFormationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
