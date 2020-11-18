import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListBusinessReportSchedulesCommand,
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput,
} from "../commands/ListBusinessReportSchedulesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListBusinessReportSchedulesCommandInput,
  ...args: any
): Promise<ListBusinessReportSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBusinessReportSchedulesCommand(input), ...args);
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListBusinessReportSchedulesCommandInput,
  ...args: any
): Promise<ListBusinessReportSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.listBusinessReportSchedules(input, ...args);
};
export async function* paginateListBusinessReportSchedules(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListBusinessReportSchedulesCommandInput,
  ...additionalArguments: any
): Paginator<ListBusinessReportSchedulesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBusinessReportSchedulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
