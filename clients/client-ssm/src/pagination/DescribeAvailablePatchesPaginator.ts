// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeAvailablePatchesCommand,
  DescribeAvailablePatchesCommandInput,
  DescribeAvailablePatchesCommandOutput,
} from "../commands/DescribeAvailablePatchesCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeAvailablePatchesCommandInput,
  ...args: any
): Promise<DescribeAvailablePatchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAvailablePatchesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAvailablePatches(
  config: SSMPaginationConfiguration,
  input: DescribeAvailablePatchesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAvailablePatchesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAvailablePatchesCommandOutput;
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
