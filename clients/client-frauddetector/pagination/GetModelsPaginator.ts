import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { GetModelsCommand, GetModelsCommandInput, GetModelsCommandOutput } from "../commands/GetModelsCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetModelsCommandInput,
  ...args: any
): Promise<GetModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetModelsCommand(input, ...args));
};
const makePagedRequest = async (
  client: FraudDetector,
  input: GetModelsCommandInput,
  ...args: any
): Promise<GetModelsCommandOutput> => {
  // @ts-ignore
  return await client.getModels(input, ...args);
};
export async function* getModelsPaginate(
  config: FraudDetectorPaginationConfiguration,
  input: GetModelsCommandInput,
  ...additionalArguments: any
): Paginator<GetModelsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetModelsCommandOutput;
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
