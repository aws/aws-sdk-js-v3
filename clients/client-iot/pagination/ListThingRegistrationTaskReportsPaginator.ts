import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListThingRegistrationTaskReportsCommand,
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput,
} from "../commands/ListThingRegistrationTaskReportsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListThingRegistrationTaskReportsCommandInput,
  ...args: any
): Promise<ListThingRegistrationTaskReportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThingRegistrationTaskReportsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListThingRegistrationTaskReportsCommandInput,
  ...args: any
): Promise<ListThingRegistrationTaskReportsCommandOutput> => {
  // @ts-ignore
  return await client.listThingRegistrationTaskReports(input, ...args);
};
export async function* listThingRegistrationTaskReportsPaginate(
  config: IoTPaginationConfiguration,
  input: ListThingRegistrationTaskReportsCommandInput,
  ...additionalArguments: any
): Paginator<ListThingRegistrationTaskReportsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThingRegistrationTaskReportsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
