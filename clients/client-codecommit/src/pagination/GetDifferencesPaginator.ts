// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetDifferencesCommand,
  GetDifferencesCommandInput,
  GetDifferencesCommandOutput,
} from "../commands/GetDifferencesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetDifferencesCommandInput,
  ...args: any
): Promise<GetDifferencesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDifferencesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeCommit,
  input: GetDifferencesCommandInput,
  ...args: any
): Promise<GetDifferencesCommandOutput> => {
  // @ts-ignore
  return await client.getDifferences(input, ...args);
};
export async function* paginateGetDifferences(
  config: CodeCommitPaginationConfiguration,
  input: GetDifferencesCommandInput,
  ...additionalArguments: any
): Paginator<GetDifferencesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDifferencesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
