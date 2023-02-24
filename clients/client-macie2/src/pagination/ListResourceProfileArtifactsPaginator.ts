// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListResourceProfileArtifactsCommand,
  ListResourceProfileArtifactsCommandInput,
  ListResourceProfileArtifactsCommandOutput,
} from "../commands/ListResourceProfileArtifactsCommand";
import { Macie2 } from "../Macie2";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Macie2Client,
  input: ListResourceProfileArtifactsCommandInput,
  ...args: any
): Promise<ListResourceProfileArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceProfileArtifactsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Macie2,
  input: ListResourceProfileArtifactsCommandInput,
  ...args: any
): Promise<ListResourceProfileArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.listResourceProfileArtifacts(input, ...args);
};
export async function* paginateListResourceProfileArtifacts(
  config: Macie2PaginationConfiguration,
  input: ListResourceProfileArtifactsCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceProfileArtifactsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceProfileArtifactsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Macie2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
