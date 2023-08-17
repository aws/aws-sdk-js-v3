// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDatastoresCommand,
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput,
} from "../commands/ListDatastoresCommand";
import { MedicalImagingClient } from "../MedicalImagingClient";
import { MedicalImagingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MedicalImagingClient,
  input: ListDatastoresCommandInput,
  ...args: any
): Promise<ListDatastoresCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatastoresCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDatastores(
  config: MedicalImagingPaginationConfiguration,
  input: ListDatastoresCommandInput,
  ...additionalArguments: any
): Paginator<ListDatastoresCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatastoresCommandOutput;
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
