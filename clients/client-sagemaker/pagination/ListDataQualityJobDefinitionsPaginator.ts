import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListDataQualityJobDefinitionsCommand,
  ListDataQualityJobDefinitionsCommandInput,
  ListDataQualityJobDefinitionsCommandOutput,
} from "../commands/ListDataQualityJobDefinitionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListDataQualityJobDefinitionsCommandInput,
  ...args: any
): Promise<ListDataQualityJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataQualityJobDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListDataQualityJobDefinitionsCommandInput,
  ...args: any
): Promise<ListDataQualityJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.listDataQualityJobDefinitions(input, ...args);
};
export async function* paginateListDataQualityJobDefinitions(
  config: SageMakerPaginationConfiguration,
  input: ListDataQualityJobDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataQualityJobDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataQualityJobDefinitionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
