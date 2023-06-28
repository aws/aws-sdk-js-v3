// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAnnotationImportJobsCommand,
  ListAnnotationImportJobsCommandInput,
  ListAnnotationImportJobsCommandOutput,
} from "../commands/ListAnnotationImportJobsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListAnnotationImportJobsCommandInput,
  ...args: any
): Promise<ListAnnotationImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnnotationImportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAnnotationImportJobs(
  config: OmicsPaginationConfiguration,
  input: ListAnnotationImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListAnnotationImportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnnotationImportJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof OmicsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Omics | OmicsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
