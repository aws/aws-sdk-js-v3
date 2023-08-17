// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetTableObjectsCommand,
  GetTableObjectsCommandInput,
  GetTableObjectsCommandOutput,
} from "../commands/GetTableObjectsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LakeFormationClient,
  input: GetTableObjectsCommandInput,
  ...args: any
): Promise<GetTableObjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTableObjectsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetTableObjects(
  config: LakeFormationPaginationConfiguration,
  input: GetTableObjectsCommandInput,
  ...additionalArguments: any
): Paginator<GetTableObjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTableObjectsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LakeFormationClient) {
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
