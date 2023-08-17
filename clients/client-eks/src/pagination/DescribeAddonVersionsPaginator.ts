// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeAddonVersionsCommand,
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
} from "../commands/DescribeAddonVersionsCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: DescribeAddonVersionsCommandInput,
  ...args: any
): Promise<DescribeAddonVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAddonVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAddonVersions(
  config: EKSPaginationConfiguration,
  input: DescribeAddonVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAddonVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAddonVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
