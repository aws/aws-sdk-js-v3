// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListClassificationJobsCommand,
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
} from "../commands/ListClassificationJobsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Macie2Client,
  input: ListClassificationJobsCommandInput,
  ...args: any
): Promise<ListClassificationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClassificationJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListClassificationJobs(
  config: Macie2PaginationConfiguration,
  input: ListClassificationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListClassificationJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClassificationJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
