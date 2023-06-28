// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListScheduleGroupsCommand,
  ListScheduleGroupsCommandInput,
  ListScheduleGroupsCommandOutput,
} from "../commands/ListScheduleGroupsCommand";
import { SchedulerClient } from "../SchedulerClient";
import { SchedulerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SchedulerClient,
  input: ListScheduleGroupsCommandInput,
  ...args: any
): Promise<ListScheduleGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListScheduleGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListScheduleGroups(
  config: SchedulerPaginationConfiguration,
  input: ListScheduleGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListScheduleGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListScheduleGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SchedulerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Scheduler | SchedulerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
