import { Signer } from "../Signer";
import { SignerClient } from "../SignerClient";
import {
  ListSigningProfilesCommand,
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput,
} from "../commands/ListSigningProfilesCommand";
import { SignerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Signer,
  input: ListSigningProfilesCommandInput,
  ...args: any
): Promise<ListSigningProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listSigningProfiles(input, ...args);
};
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
    if (config.client instanceof Signer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SignerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Signer | SignerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
