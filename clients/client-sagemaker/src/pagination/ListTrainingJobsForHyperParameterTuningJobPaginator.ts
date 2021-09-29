import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListTrainingJobsForHyperParameterTuningJobCommand,
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput,
} from "../commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ...args: any
): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrainingJobsForHyperParameterTuningJobCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ...args: any
): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput> => {
  // @ts-ignore
  return await client.listTrainingJobsForHyperParameterTuningJob(input, ...args);
};
export async function* paginateListTrainingJobsForHyperParameterTuningJob(
  config: SageMakerPaginationConfiguration,
  input: ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ...additionalArguments: any
): Paginator<ListTrainingJobsForHyperParameterTuningJobCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTrainingJobsForHyperParameterTuningJobCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
