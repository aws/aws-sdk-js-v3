import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListSubscribedWorkteamsCommand,
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput,
} from "../commands/ListSubscribedWorkteamsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListSubscribedWorkteamsCommandInput,
  ...args: any
): Promise<ListSubscribedWorkteamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubscribedWorkteamsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListSubscribedWorkteamsCommandInput,
  ...args: any
): Promise<ListSubscribedWorkteamsCommandOutput> => {
  // @ts-ignore
  return await client.listSubscribedWorkteams(input, ...args);
};
export async function* paginateListSubscribedWorkteams(
  config: SageMakerPaginationConfiguration,
  input: ListSubscribedWorkteamsCommandInput,
  ...additionalArguments: any
): Paginator<ListSubscribedWorkteamsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSubscribedWorkteamsCommandOutput;
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
