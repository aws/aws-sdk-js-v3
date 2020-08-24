import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListAppsCommandInput,
  ...args: any
): Promise<ListAppsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListAppsCommandInput,
  ...args: any
): Promise<ListAppsCommandOutput> => {
  // @ts-ignore
  return await client.listApps(input, ...args);
};
export async function* listAppsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListAppsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAppsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
