// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AmplifyUIBuilder } from "../AmplifyUIBuilder";
import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import { ListThemesCommand, ListThemesCommandInput, ListThemesCommandOutput } from "../commands/ListThemesCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AmplifyUIBuilderClient,
  input: ListThemesCommandInput,
  ...args: any
): Promise<ListThemesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThemesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AmplifyUIBuilder,
  input: ListThemesCommandInput,
  ...args: any
): Promise<ListThemesCommandOutput> => {
  // @ts-ignore
  return await client.listThemes(input, ...args);
};
export async function* paginateListThemes(
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ListThemesCommandInput,
  ...additionalArguments: any
): Paginator<ListThemesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThemesCommandOutput;
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
