// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeApplicationsCommand,
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "../commands/DescribeApplicationsCommand";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkSpacesClient,
  input: DescribeApplicationsCommandInput,
  ...args: any
): Promise<DescribeApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeApplicationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeApplications(
  config: WorkSpacesPaginationConfiguration,
  input: DescribeApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeApplicationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeApplicationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
