import { WorkSpaces } from "../WorkSpaces";
import { WorkSpacesClient } from "../WorkSpacesClient";
import {
  DescribeWorkspacesCommand,
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput,
} from "../commands/DescribeWorkspacesCommand";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
