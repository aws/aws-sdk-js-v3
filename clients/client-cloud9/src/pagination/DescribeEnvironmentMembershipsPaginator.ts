// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { Cloud9Client } from "../Cloud9Client";
import {
  DescribeEnvironmentMembershipsCommand,
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
} from "../commands/DescribeEnvironmentMembershipsCommand";
import { Cloud9PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Cloud9Client,
  input: DescribeEnvironmentMembershipsCommandInput,
  ...args: any
): Promise<DescribeEnvironmentMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEnvironmentMembershipsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeEnvironmentMemberships(
  config: Cloud9PaginationConfiguration,
  input: DescribeEnvironmentMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEnvironmentMembershipsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEnvironmentMembershipsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Cloud9Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Cloud9 | Cloud9Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
