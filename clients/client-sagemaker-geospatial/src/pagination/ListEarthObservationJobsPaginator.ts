// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEarthObservationJobsCommand,
  ListEarthObservationJobsCommandInput,
  ListEarthObservationJobsCommandOutput,
} from "../commands/ListEarthObservationJobsCommand";
import { SageMakerGeospatial } from "../SageMakerGeospatial";
import { SageMakerGeospatialClient } from "../SageMakerGeospatialClient";
import { SageMakerGeospatialPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerGeospatialClient,
  input: ListEarthObservationJobsCommandInput,
  ...args: any
): Promise<ListEarthObservationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEarthObservationJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMakerGeospatial,
  input: ListEarthObservationJobsCommandInput,
  ...args: any
): Promise<ListEarthObservationJobsCommandOutput> => {
  // @ts-ignore
  return await client.listEarthObservationJobs(input, ...args);
};
export async function* paginateListEarthObservationJobs(
  config: SageMakerGeospatialPaginationConfiguration,
  input: ListEarthObservationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListEarthObservationJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEarthObservationJobsCommandOutput;
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
