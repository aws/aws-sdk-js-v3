// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFlywheelsCommand,
  ListFlywheelsCommandInput,
  ListFlywheelsCommandOutput,
} from "../commands/ListFlywheelsCommand";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListFlywheelsCommandInput,
  ...args: any
): Promise<ListFlywheelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFlywheelsCommand(input), ...args);
};
export async function* paginateListFlywheels(
  config: ComprehendPaginationConfiguration,
  input: ListFlywheelsCommandInput,
  ...additionalArguments: any
): Paginator<ListFlywheelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFlywheelsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
