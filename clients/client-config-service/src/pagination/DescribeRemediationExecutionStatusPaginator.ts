// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeRemediationExecutionStatusCommand,
  DescribeRemediationExecutionStatusCommandInput,
  DescribeRemediationExecutionStatusCommandOutput,
} from "../commands/DescribeRemediationExecutionStatusCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: DescribeRemediationExecutionStatusCommandInput,
  ...args: any
): Promise<DescribeRemediationExecutionStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRemediationExecutionStatusCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeRemediationExecutionStatus(
  config: ConfigServicePaginationConfiguration,
  input: DescribeRemediationExecutionStatusCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRemediationExecutionStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRemediationExecutionStatusCommandOutput;
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
