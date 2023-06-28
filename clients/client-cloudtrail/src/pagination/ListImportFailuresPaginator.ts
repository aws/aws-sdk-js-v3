// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import {
  ListImportFailuresCommand,
  ListImportFailuresCommandInput,
  ListImportFailuresCommandOutput,
} from "../commands/ListImportFailuresCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudTrailClient,
  input: ListImportFailuresCommandInput,
  ...args: any
): Promise<ListImportFailuresCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImportFailuresCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListImportFailures(
  config: CloudTrailPaginationConfiguration,
  input: ListImportFailuresCommandInput,
  ...additionalArguments: any
): Paginator<ListImportFailuresCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImportFailuresCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudTrailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudTrail | CloudTrailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
