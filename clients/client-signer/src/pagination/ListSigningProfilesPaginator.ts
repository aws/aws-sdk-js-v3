// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSigningProfilesCommand,
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput,
} from "../commands/ListSigningProfilesCommand";
import { SignerClient } from "../SignerClient";
import { SignerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SignerClient,
  input: ListSigningProfilesCommandInput,
  ...args: any
): Promise<ListSigningProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSigningProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSigningProfiles(
  config: SignerPaginationConfiguration,
  input: ListSigningProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListSigningProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSigningProfilesCommandOutput;
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
