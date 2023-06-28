// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeVcenterClientsCommand,
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput,
} from "../commands/DescribeVcenterClientsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MgnClient,
  input: DescribeVcenterClientsCommandInput,
  ...args: any
): Promise<DescribeVcenterClientsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeVcenterClientsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeVcenterClients(
  config: MgnPaginationConfiguration,
  input: DescribeVcenterClientsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeVcenterClientsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeVcenterClientsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MgnClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mgn | MgnClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
