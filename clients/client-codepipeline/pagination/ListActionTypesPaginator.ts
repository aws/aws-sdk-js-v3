import { CodePipeline } from "../CodePipeline";
import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListActionTypesCommand,
  ListActionTypesCommandInput,
  ListActionTypesCommandOutput,
} from "../commands/ListActionTypesCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodePipelineClient,
  input: ListActionTypesCommandInput,
  ...args: any
): Promise<ListActionTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActionTypesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodePipeline,
  input: ListActionTypesCommandInput,
  ...args: any
): Promise<ListActionTypesCommandOutput> => {
  // @ts-ignore
  return await client.listActionTypes(input, ...args);
};
export async function* listActionTypesPaginate(
  config: CodePipelinePaginationConfiguration,
  input: ListActionTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListActionTypesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListActionTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodePipeline) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodePipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodePipeline | CodePipelineClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
