// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeOrganizationResourceCollectionHealthCommand,
  DescribeOrganizationResourceCollectionHealthCommandInput,
  DescribeOrganizationResourceCollectionHealthCommandOutput,
} from "../commands/DescribeOrganizationResourceCollectionHealthCommand";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: DescribeOrganizationResourceCollectionHealthCommandInput,
  ...args: any
): Promise<DescribeOrganizationResourceCollectionHealthCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOrganizationResourceCollectionHealthCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeOrganizationResourceCollectionHealth(
  config: DevOpsGuruPaginationConfiguration,
  input: DescribeOrganizationResourceCollectionHealthCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOrganizationResourceCollectionHealthCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOrganizationResourceCollectionHealthCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof DevOpsGuruClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
