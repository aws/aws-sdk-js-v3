import { WorkSpaces } from "../WorkSpaces";
import { WorkSpacesClient } from "../WorkSpacesClient";
import {
  DescribeWorkspaceDirectoriesCommand,
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput,
} from "../commands/DescribeWorkspaceDirectoriesCommand";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkSpacesClient,
  input: DescribeWorkspaceDirectoriesCommandInput,
  ...args: any
): Promise<DescribeWorkspaceDirectoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeWorkspaceDirectoriesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkSpaces,
  input: DescribeWorkspaceDirectoriesCommandInput,
  ...args: any
): Promise<DescribeWorkspaceDirectoriesCommandOutput> => {
  // @ts-ignore
  return await client.describeWorkspaceDirectories(input, ...args);
};
export async function* paginateDescribeWorkspaceDirectories(
  config: WorkSpacesPaginationConfiguration,
  input: DescribeWorkspaceDirectoriesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeWorkspaceDirectoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeWorkspaceDirectoriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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
