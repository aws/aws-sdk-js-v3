// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWorkersWithQualificationTypeCommand,
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput,
} from "../commands/ListWorkersWithQualificationTypeCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListWorkersWithQualificationTypeCommandInput,
  ...args: any
): Promise<ListWorkersWithQualificationTypeCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkersWithQualificationTypeCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkersWithQualificationType(
  config: MTurkPaginationConfiguration,
  input: ListWorkersWithQualificationTypeCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkersWithQualificationTypeCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkersWithQualificationTypeCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
