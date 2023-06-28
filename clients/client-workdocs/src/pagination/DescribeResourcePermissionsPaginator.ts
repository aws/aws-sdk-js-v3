// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeResourcePermissionsCommand,
  DescribeResourcePermissionsCommandInput,
  DescribeResourcePermissionsCommandOutput,
} from "../commands/DescribeResourcePermissionsCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkDocsClient,
  input: DescribeResourcePermissionsCommandInput,
  ...args: any
): Promise<DescribeResourcePermissionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeResourcePermissionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeResourcePermissions(
  config: WorkDocsPaginationConfiguration,
  input: DescribeResourcePermissionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeResourcePermissionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeResourcePermissionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof WorkDocsClient) {
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
