// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMonitoringSchedulesCommand,
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput,
} from "../commands/ListMonitoringSchedulesCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListMonitoringSchedulesCommandInput,
  ...args: any
): Promise<ListMonitoringSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMonitoringSchedulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListMonitoringSchedulesCommandInput,
  ...args: any
): Promise<ListMonitoringSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.listMonitoringSchedules(input, ...args);
};
export async function* paginateListMonitoringSchedules(
  config: SageMakerPaginationConfiguration,
  input: ListMonitoringSchedulesCommandInput,
  ...additionalArguments: any
): Paginator<ListMonitoringSchedulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMonitoringSchedulesCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
