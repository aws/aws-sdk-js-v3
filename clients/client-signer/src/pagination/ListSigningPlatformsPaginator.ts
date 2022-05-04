// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSigningPlatformsCommand,
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput,
} from "../commands/ListSigningPlatformsCommand";
import { Signer } from "../Signer";
import { SignerClient } from "../SignerClient";
import { SignerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SignerClient,
  input: ListSigningPlatformsCommandInput,
  ...args: any
): Promise<ListSigningPlatformsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSigningPlatformsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Signer,
  input: ListSigningPlatformsCommandInput,
  ...args: any
): Promise<ListSigningPlatformsCommandOutput> => {
  // @ts-ignore
  return await client.listSigningPlatforms(input, ...args);
};
export async function* paginateListSigningPlatforms(
  config: SignerPaginationConfiguration,
  input: ListSigningPlatformsCommandInput,
  ...additionalArguments: any
): Paginator<ListSigningPlatformsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSigningPlatformsCommandOutput;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
