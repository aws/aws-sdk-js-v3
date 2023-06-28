// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListFHIRImportJobsCommand,
  ListFHIRImportJobsCommandInput,
  ListFHIRImportJobsCommandOutput,
} from "../commands/ListFHIRImportJobsCommand";
import { HealthLakeClient } from "../HealthLakeClient";
import { HealthLakePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: HealthLakeClient,
  input: ListFHIRImportJobsCommandInput,
  ...args: any
): Promise<ListFHIRImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFHIRImportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFHIRImportJobs(
  config: HealthLakePaginationConfiguration,
  input: ListFHIRImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListFHIRImportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFHIRImportJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof HealthLakeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected HealthLake | HealthLakeClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
