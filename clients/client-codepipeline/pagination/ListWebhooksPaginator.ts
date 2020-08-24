import { CodePipeline } from "../CodePipeline";
import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListWebhooksCommand,
  ListWebhooksCommandInput,
  ListWebhooksCommandOutput,
} from "../commands/ListWebhooksCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodePipelineClient,
  input: ListWebhooksCommandInput,
  ...args: any
): Promise<ListWebhooksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWebhooksCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodePipeline,
  input: ListWebhooksCommandInput,
  ...args: any
): Promise<ListWebhooksCommandOutput> => {
  // @ts-ignore
  return await client.listWebhooks(input, ...args);
};
export async function* listWebhooksPaginate(
  config: CodePipelinePaginationConfiguration,
  input: ListWebhooksCommandInput,
  ...additionalArguments: any
): Paginator<ListWebhooksCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListWebhooksCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodePipeline) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodePipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodePipeline | CodePipelineClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
