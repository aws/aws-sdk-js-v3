// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListExportJobsCommand,
  ListExportJobsCommandInput,
  ListExportJobsCommandOutput,
} from "../commands/ListExportJobsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListExportJobsCommandInput,
  ...args: any
): Promise<ListExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListExportJobs(
  config: SESv2PaginationConfiguration,
  input: ListExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListExportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExportJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof SESv2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SESv2 | SESv2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
