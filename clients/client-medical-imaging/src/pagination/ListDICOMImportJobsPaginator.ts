// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDICOMImportJobsCommand,
  ListDICOMImportJobsCommandInput,
  ListDICOMImportJobsCommandOutput,
} from "../commands/ListDICOMImportJobsCommand";
import { MedicalImagingClient } from "../MedicalImagingClient";
import { MedicalImagingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MedicalImagingClient,
  input: ListDICOMImportJobsCommandInput,
  ...args: any
): Promise<ListDICOMImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDICOMImportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDICOMImportJobs(
  config: MedicalImagingPaginationConfiguration,
  input: ListDICOMImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDICOMImportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDICOMImportJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MedicalImagingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MedicalImaging | MedicalImagingClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
