// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AmplifyUIBuilder } from "../AmplifyUIBuilder";
import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import { ListFormsCommand, ListFormsCommandInput, ListFormsCommandOutput } from "../commands/ListFormsCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AmplifyUIBuilderClient,
  input: ListFormsCommandInput,
  ...args: any
): Promise<ListFormsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFormsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AmplifyUIBuilder,
  input: ListFormsCommandInput,
  ...args: any
): Promise<ListFormsCommandOutput> => {
  // @ts-ignore
  return await client.listForms(input, ...args);
};
export async function* paginateListForms(
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ListFormsCommandInput,
  ...additionalArguments: any
): Paginator<ListFormsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFormsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AmplifyUIBuilder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AmplifyUIBuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AmplifyUIBuilder | AmplifyUIBuilderClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
