// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFHIRImportJobsCommand,
  ListFHIRImportJobsCommandInput,
  ListFHIRImportJobsCommandOutput,
} from "../commands/ListFHIRImportJobsCommand";
import { HealthLake } from "../HealthLake";
import { HealthLakeClient } from "../HealthLakeClient";
import { HealthLakePaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: HealthLake,
  input: ListFHIRImportJobsCommandInput,
  ...args: any
): Promise<ListFHIRImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listFHIRImportJobs(input, ...args);
};
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
    if (config.client instanceof HealthLake) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HealthLakeClient) {
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
