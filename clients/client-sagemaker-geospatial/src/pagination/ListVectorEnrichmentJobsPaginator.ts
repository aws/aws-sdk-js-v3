// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListVectorEnrichmentJobsCommand,
  ListVectorEnrichmentJobsCommandInput,
  ListVectorEnrichmentJobsCommandOutput,
} from "../commands/ListVectorEnrichmentJobsCommand";
import { SageMakerGeospatial } from "../SageMakerGeospatial";
import { SageMakerGeospatialClient } from "../SageMakerGeospatialClient";
import { SageMakerGeospatialPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerGeospatialClient,
  input: ListVectorEnrichmentJobsCommandInput,
  ...args: any
): Promise<ListVectorEnrichmentJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVectorEnrichmentJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMakerGeospatial,
  input: ListVectorEnrichmentJobsCommandInput,
  ...args: any
): Promise<ListVectorEnrichmentJobsCommandOutput> => {
  // @ts-ignore
  return await client.listVectorEnrichmentJobs(input, ...args);
};
export async function* paginateListVectorEnrichmentJobs(
  config: SageMakerGeospatialPaginationConfiguration,
  input: ListVectorEnrichmentJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListVectorEnrichmentJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVectorEnrichmentJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof SageMakerGeospatial) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerGeospatialClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMakerGeospatial | SageMakerGeospatialClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
