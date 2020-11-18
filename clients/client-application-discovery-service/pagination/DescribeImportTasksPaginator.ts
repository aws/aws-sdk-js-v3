import { ApplicationDiscoveryService } from "../ApplicationDiscoveryService";
import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  DescribeImportTasksCommand,
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput,
} from "../commands/DescribeImportTasksCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ApplicationDiscoveryServiceClient,
  input: DescribeImportTasksCommandInput,
  ...args: any
): Promise<DescribeImportTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeImportTasksCommand(input), ...args);
};
const makePagedRequest = async (
  client: ApplicationDiscoveryService,
  input: DescribeImportTasksCommandInput,
  ...args: any
): Promise<DescribeImportTasksCommandOutput> => {
  // @ts-ignore
  return await client.describeImportTasks(input, ...args);
};
export async function* paginateDescribeImportTasks(
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeImportTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImportTasksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeImportTasksCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ApplicationDiscoveryService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationDiscoveryServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationDiscoveryService | ApplicationDiscoveryServiceClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
