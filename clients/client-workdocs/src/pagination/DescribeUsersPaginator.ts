// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "../commands/DescribeUsersCommand";
import { WorkDocs } from "../WorkDocs";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkDocsClient,
  input: DescribeUsersCommandInput,
  ...args: any
): Promise<DescribeUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeUsersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkDocs,
  input: DescribeUsersCommandInput,
  ...args: any
): Promise<DescribeUsersCommandOutput> => {
  // @ts-ignore
  return await client.describeUsers(input, ...args);
};
export async function* paginateDescribeUsers(
  config: WorkDocsPaginationConfiguration,
  input: DescribeUsersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeUsersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeUsersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof WorkDocs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkDocsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkDocs | WorkDocsClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
