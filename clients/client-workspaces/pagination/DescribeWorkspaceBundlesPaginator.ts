import { WorkSpaces } from "../WorkSpaces";
import { WorkSpacesClient } from "../WorkSpacesClient";
import {
  DescribeWorkspaceBundlesCommand,
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
} from "../commands/DescribeWorkspaceBundlesCommand";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkSpacesClient,
  input: DescribeWorkspaceBundlesCommandInput,
  ...args: any
): Promise<DescribeWorkspaceBundlesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeWorkspaceBundlesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkSpaces,
  input: DescribeWorkspaceBundlesCommandInput,
  ...args: any
): Promise<DescribeWorkspaceBundlesCommandOutput> => {
  // @ts-ignore
  return await client.describeWorkspaceBundles(input, ...args);
};
export async function* paginateDescribeWorkspaceBundles(
  config: WorkSpacesPaginationConfiguration,
  input: DescribeWorkspaceBundlesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeWorkspaceBundlesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeWorkspaceBundlesCommandOutput;
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
