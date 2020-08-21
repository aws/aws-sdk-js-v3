import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import {
  GetExternalModelsCommand,
  GetExternalModelsCommandInput,
  GetExternalModelsCommandOutput,
} from "../commands/GetExternalModelsCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetExternalModelsCommandInput,
  ...args: any
): Promise<GetExternalModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetExternalModelsCommand(input, ...args));
};
const makePagedRequest = async (
  client: FraudDetector,
  input: GetExternalModelsCommandInput,
  ...args: any
): Promise<GetExternalModelsCommandOutput> => {
  // @ts-ignore
  return await client.getExternalModels(input, ...args);
};
export async function* getExternalModelsPaginate(
  config: FraudDetectorPaginationConfiguration,
  input: GetExternalModelsCommandInput,
  ...additionalArguments: any
): Paginator<GetExternalModelsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetExternalModelsCommandOutput;
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
