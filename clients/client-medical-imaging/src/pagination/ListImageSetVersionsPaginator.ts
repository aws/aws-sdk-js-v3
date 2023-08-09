// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListImageSetVersionsCommand,
  ListImageSetVersionsCommandInput,
  ListImageSetVersionsCommandOutput,
} from "../commands/ListImageSetVersionsCommand";
import { MedicalImagingClient } from "../MedicalImagingClient";
import { MedicalImagingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MedicalImagingClient,
  input: ListImageSetVersionsCommandInput,
  ...args: any
): Promise<ListImageSetVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImageSetVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListImageSetVersions(
  config: MedicalImagingPaginationConfiguration,
  input: ListImageSetVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListImageSetVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImageSetVersionsCommandOutput;
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
