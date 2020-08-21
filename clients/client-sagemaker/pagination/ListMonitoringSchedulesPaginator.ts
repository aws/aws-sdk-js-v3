import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListMonitoringSchedulesCommand,
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput,
} from "../commands/ListMonitoringSchedulesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListMonitoringSchedulesCommandInput,
  ...args: any
): Promise<ListMonitoringSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMonitoringSchedulesCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListMonitoringSchedulesCommandInput,
  ...args: any
): Promise<ListMonitoringSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.listMonitoringSchedules(input, ...args);
};
export async function* listMonitoringSchedulesPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListMonitoringSchedulesCommandInput,
  ...additionalArguments: any
): Paginator<ListMonitoringSchedulesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListMonitoringSchedulesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
