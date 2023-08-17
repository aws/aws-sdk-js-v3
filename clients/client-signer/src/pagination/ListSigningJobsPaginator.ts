// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSigningJobsCommand,
  ListSigningJobsCommandInput,
  ListSigningJobsCommandOutput,
} from "../commands/ListSigningJobsCommand";
import { SignerClient } from "../SignerClient";
import { SignerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SignerClient,
  input: ListSigningJobsCommandInput,
  ...args: any
): Promise<ListSigningJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSigningJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSigningJobs(
  config: SignerPaginationConfiguration,
  input: ListSigningJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListSigningJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSigningJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SignerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Signer | SignerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
