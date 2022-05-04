// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDataIngestionJobsCommand,
  ListDataIngestionJobsCommandInput,
  ListDataIngestionJobsCommandOutput,
} from "../commands/ListDataIngestionJobsCommand";
import { LookoutEquipment } from "../LookoutEquipment";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { LookoutEquipmentPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LookoutEquipmentClient,
  input: ListDataIngestionJobsCommandInput,
  ...args: any
): Promise<ListDataIngestionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataIngestionJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LookoutEquipment,
  input: ListDataIngestionJobsCommandInput,
  ...args: any
): Promise<ListDataIngestionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listDataIngestionJobs(input, ...args);
};
export async function* paginateListDataIngestionJobs(
  config: LookoutEquipmentPaginationConfiguration,
  input: ListDataIngestionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataIngestionJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataIngestionJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LookoutEquipment) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LookoutEquipmentClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LookoutEquipment | LookoutEquipmentClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
