import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import {
  GetVariablesCommand,
  GetVariablesCommandInput,
  GetVariablesCommandOutput,
} from "../commands/GetVariablesCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetVariablesCommandInput,
  ...args: any
): Promise<GetVariablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetVariablesCommand(input), ...args);
};
const makePagedRequest = async (
  client: FraudDetector,
  input: GetVariablesCommandInput,
  ...args: any
): Promise<GetVariablesCommandOutput> => {
  // @ts-ignore
  return await client.getVariables(input, ...args);
};
export async function* getVariablesPaginate(
  config: FraudDetectorPaginationConfiguration,
  input: GetVariablesCommandInput,
  ...additionalArguments: any
): Paginator<GetVariablesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetVariablesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FraudDetector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FraudDetectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
