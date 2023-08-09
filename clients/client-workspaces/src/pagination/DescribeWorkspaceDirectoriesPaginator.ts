// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeWorkspaceDirectoriesCommand,
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput,
} from "../commands/DescribeWorkspaceDirectoriesCommand";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof WorkSpacesClient) {
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
