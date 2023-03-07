// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudFormationClient } from "../CloudFormationClient";
import { ListTypesCommand, ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListTypesCommandInput,
  ...args: any
): Promise<ListTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTypesCommand(input), ...args);
};
export async function* paginateListTypes(
  config: CloudFormationPaginationConfiguration,
  input: ListTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListTypesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTypesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
