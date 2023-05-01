// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribePatchGroupsCommand,
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput,
} from "../commands/DescribePatchGroupsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribePatchGroupsCommandInput,
  ...args: any
): Promise<DescribePatchGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePatchGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribePatchGroups(
  config: SSMPaginationConfiguration,
  input: DescribePatchGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePatchGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePatchGroupsCommandOutput;
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
