// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeExportTasksCommand,
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "../commands/DescribeExportTasksCommand";
import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeExportTasksCommandInput,
  ...args: any
): Promise<DescribeExportTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeExportTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeExportTasksCommandInput,
  ...args: any
): Promise<DescribeExportTasksCommandOutput> => {
  // @ts-ignore
  return await client.describeExportTasks(input, ...args);
};
export async function* paginateDescribeExportTasks(
  config: RDSPaginationConfiguration,
  input: DescribeExportTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeExportTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeExportTasksCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
