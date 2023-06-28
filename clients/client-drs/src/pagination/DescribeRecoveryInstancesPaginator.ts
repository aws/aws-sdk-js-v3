// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeRecoveryInstancesCommand,
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
} from "../commands/DescribeRecoveryInstancesCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DrsClient,
  input: DescribeRecoveryInstancesCommandInput,
  ...args: any
): Promise<DescribeRecoveryInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRecoveryInstancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeRecoveryInstances(
  config: DrsPaginationConfiguration,
  input: DescribeRecoveryInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRecoveryInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRecoveryInstancesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof DrsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Drs | DrsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
