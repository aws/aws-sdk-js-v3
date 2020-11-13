import { DataBrew } from "../DataBrew";
import { DataBrewClient } from "../DataBrewClient";
import {
  ListSchedulesCommand,
  ListSchedulesCommandInput,
  ListSchedulesCommandOutput,
} from "../commands/ListSchedulesCommand";
import { DataBrewPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DataBrewClient,
  input: ListSchedulesCommandInput,
  ...args: any
): Promise<ListSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSchedulesCommand(input), ...args);
};
const makePagedRequest = async (
  client: DataBrew,
  input: ListSchedulesCommandInput,
  ...args: any
): Promise<ListSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.listSchedules(input, ...args);
};
export async function* listSchedulesPaginate(
  config: DataBrewPaginationConfiguration,
  input: ListSchedulesCommandInput,
  ...additionalArguments: any
): Paginator<ListSchedulesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSchedulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DataBrew) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataBrewClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataBrew | DataBrewClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
