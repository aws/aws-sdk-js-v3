// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeApplicationAssociationsCommand,
  DescribeApplicationAssociationsCommandInput,
  DescribeApplicationAssociationsCommandOutput,
} from "../commands/DescribeApplicationAssociationsCommand";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { WorkSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkSpacesClient,
  input: DescribeApplicationAssociationsCommandInput,
  ...args: any
): Promise<DescribeApplicationAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeApplicationAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeApplicationAssociations(
  config: WorkSpacesPaginationConfiguration,
  input: DescribeApplicationAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeApplicationAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeApplicationAssociationsCommandOutput;
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
