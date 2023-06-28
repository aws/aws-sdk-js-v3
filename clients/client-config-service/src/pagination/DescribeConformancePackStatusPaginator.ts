// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeConformancePackStatusCommand,
  DescribeConformancePackStatusCommandInput,
  DescribeConformancePackStatusCommandOutput,
} from "../commands/DescribeConformancePackStatusCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeConformancePackStatusCommandInput,
  ...args: any
): Promise<DescribeConformancePackStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConformancePackStatusCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeConformancePackStatus(
  config: ConfigServicePaginationConfiguration,
  input: DescribeConformancePackStatusCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConformancePackStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConformancePackStatusCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
