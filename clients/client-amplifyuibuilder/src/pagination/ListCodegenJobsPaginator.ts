// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AmplifyUIBuilderClient } from "../AmplifyUIBuilderClient";
import {
  ListCodegenJobsCommand,
  ListCodegenJobsCommandInput,
  ListCodegenJobsCommandOutput,
} from "../commands/ListCodegenJobsCommand";
import { AmplifyUIBuilderPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AmplifyUIBuilderClient,
  input: ListCodegenJobsCommandInput,
  ...args: any
): Promise<ListCodegenJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCodegenJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCodegenJobs(
  config: AmplifyUIBuilderPaginationConfiguration,
  input: ListCodegenJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListCodegenJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCodegenJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AmplifyUIBuilderClient) {
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
