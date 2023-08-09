// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppStreamClient } from "../AppStreamClient";
import {
  DescribeImagePermissionsCommand,
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "../commands/DescribeImagePermissionsCommand";
import { AppStreamPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppStreamClient,
  input: DescribeImagePermissionsCommandInput,
  ...args: any
): Promise<DescribeImagePermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeImagePermissionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeImagePermissions(
  config: AppStreamPaginationConfiguration,
  input: DescribeImagePermissionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImagePermissionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeImagePermissionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppStreamClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppStream | AppStreamClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
