import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { GetLabelsCommand, GetLabelsCommandInput, GetLabelsCommandOutput } from "../commands/GetLabelsCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: GetLabelsCommandInput,
  ...args: any
): Promise<GetLabelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLabelsCommand(input, ...args));
};
const makePagedRequest = async (
  client: FraudDetector,
  input: GetLabelsCommandInput,
  ...args: any
): Promise<GetLabelsCommandOutput> => {
  // @ts-ignore
  return await client.getLabels(input, ...args);
};
export async function* getLabelsPaginate(
  config: FraudDetectorPaginationConfiguration,
  input: GetLabelsCommandInput,
  ...additionalArguments: any
): Paginator<GetLabelsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetLabelsCommandOutput;
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
