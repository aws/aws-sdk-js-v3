// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppflowClient } from "../AppflowClient";
import {
  DescribeConnectorProfilesCommand,
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "../commands/DescribeConnectorProfilesCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppflowClient,
  input: DescribeConnectorProfilesCommandInput,
  ...args: any
): Promise<DescribeConnectorProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConnectorProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeConnectorProfiles(
  config: AppflowPaginationConfiguration,
  input: DescribeConnectorProfilesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConnectorProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConnectorProfilesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AppflowClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Appflow | AppflowClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
