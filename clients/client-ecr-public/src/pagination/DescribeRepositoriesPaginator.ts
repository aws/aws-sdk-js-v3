// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeRepositoriesCommand,
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "../commands/DescribeRepositoriesCommand";
import { ECRPUBLICClient } from "../ECRPUBLICClient";
import { ECRPUBLICPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ECRPUBLICClient,
  input: DescribeRepositoriesCommandInput,
  ...args: any
): Promise<DescribeRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRepositoriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeRepositories(
  config: ECRPUBLICPaginationConfiguration,
  input: DescribeRepositoriesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRepositoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRepositoriesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECRPUBLICClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECRPUBLIC | ECRPUBLICClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
