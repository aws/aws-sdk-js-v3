// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListAnswersCommand, ListAnswersCommandInput, ListAnswersCommandOutput } from "../commands/ListAnswersCommand";
import { WellArchitected } from "../WellArchitected";
import { WellArchitectedClient } from "../WellArchitectedClient";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WellArchitectedClient,
  input: ListAnswersCommandInput,
  ...args: any
): Promise<ListAnswersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnswersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WellArchitected,
  input: ListAnswersCommandInput,
  ...args: any
): Promise<ListAnswersCommandOutput> => {
  // @ts-ignore
  return await client.listAnswers(input, ...args);
};
export async function* paginateListAnswers(
  config: WellArchitectedPaginationConfiguration,
  input: ListAnswersCommandInput,
  ...additionalArguments: any
): Paginator<ListAnswersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnswersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WellArchitected) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WellArchitectedClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WellArchitected | WellArchitectedClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
