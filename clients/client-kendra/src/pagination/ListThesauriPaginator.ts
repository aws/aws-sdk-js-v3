// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListThesauriCommand,
  ListThesauriCommandInput,
  ListThesauriCommandOutput,
} from "../commands/ListThesauriCommand";
import { Kendra } from "../Kendra";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KendraClient,
  input: ListThesauriCommandInput,
  ...args: any
): Promise<ListThesauriCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThesauriCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Kendra,
  input: ListThesauriCommandInput,
  ...args: any
): Promise<ListThesauriCommandOutput> => {
  // @ts-ignore
  return await client.listThesauri(input, ...args);
};
export async function* paginateListThesauri(
  config: KendraPaginationConfiguration,
  input: ListThesauriCommandInput,
  ...additionalArguments: any
): Paginator<ListThesauriCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThesauriCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Kendra) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
