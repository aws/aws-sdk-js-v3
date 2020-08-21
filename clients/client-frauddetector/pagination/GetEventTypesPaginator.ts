import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import {
  GetEventTypesCommand,
  GetEventTypesCommandInput,
  GetEventTypesCommandOutput,
} from "../commands/GetEventTypesCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetEventTypesCommandInput,
  ...args: any
): Promise<GetEventTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEventTypesCommand(input, ...args));
};
const makePagedRequest = async (
  client: FraudDetector,
  input: GetEventTypesCommandInput,
  ...args: any
): Promise<GetEventTypesCommandOutput> => {
  // @ts-ignore
  return await client.getEventTypes(input, ...args);
};
export async function* getEventTypesPaginate(
  config: FraudDetectorPaginationConfiguration,
  input: GetEventTypesCommandInput,
  ...additionalArguments: any
): Paginator<GetEventTypesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetEventTypesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FraudDetector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FraudDetectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
