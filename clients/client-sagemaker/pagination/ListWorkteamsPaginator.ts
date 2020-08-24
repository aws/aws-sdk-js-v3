import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListWorkteamsCommand,
  ListWorkteamsCommandInput,
  ListWorkteamsCommandOutput,
} from "../commands/ListWorkteamsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListWorkteamsCommandInput,
  ...args: any
): Promise<ListWorkteamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkteamsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListWorkteamsCommandInput,
  ...args: any
): Promise<ListWorkteamsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkteams(input, ...args);
};
export async function* listWorkteamsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListWorkteamsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkteamsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListWorkteamsCommandOutput;
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
