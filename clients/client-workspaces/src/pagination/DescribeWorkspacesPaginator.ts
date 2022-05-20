// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeWorkspacesCommand,
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput,
} from "../commands/DescribeWorkspacesCommand";
import { WorkSpaces } from "../WorkSpaces";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkSpacesClient,
  input: DescribeWorkspacesCommandInput,
  ...args: any
): Promise<DescribeWorkspacesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeWorkspacesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkSpaces,
  input: DescribeWorkspacesCommandInput,
  ...args: any
): Promise<DescribeWorkspacesCommandOutput> => {
  // @ts-ignore
  return await client.describeWorkspaces(input, ...args);
};
export async function* paginateDescribeWorkspaces(
  config: WorkSpacesPaginationConfiguration,
  input: DescribeWorkspacesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeWorkspacesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeWorkspacesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof WorkSpaces) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkSpacesClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkSpaces | WorkSpacesClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
