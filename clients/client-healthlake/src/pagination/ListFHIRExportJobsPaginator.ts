// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFHIRExportJobsCommand,
  ListFHIRExportJobsCommandInput,
  ListFHIRExportJobsCommandOutput,
} from "../commands/ListFHIRExportJobsCommand";
import { HealthLake } from "../HealthLake";
import { HealthLakeClient } from "../HealthLakeClient";
import { HealthLakePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HealthLakeClient,
  input: ListFHIRExportJobsCommandInput,
  ...args: any
): Promise<ListFHIRExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFHIRExportJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: HealthLake,
  input: ListFHIRExportJobsCommandInput,
  ...args: any
): Promise<ListFHIRExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listFHIRExportJobs(input, ...args);
};
export async function* paginateListFHIRExportJobs(
  config: HealthLakePaginationConfiguration,
  input: ListFHIRExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListFHIRExportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFHIRExportJobsCommandOutput;
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
