import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  GetClassifiersCommand,
  GetClassifiersCommandInput,
  GetClassifiersCommandOutput,
} from "../commands/GetClassifiersCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetClassifiersCommandInput,
  ...args: any
): Promise<GetClassifiersCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetClassifiersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: GetClassifiersCommandInput,
  ...args: any
): Promise<GetClassifiersCommandOutput> => {
  // @ts-ignore
  return await client.getClassifiers(input, ...args);
};
export async function* paginateGetClassifiers(
  config: GluePaginationConfiguration,
  input: GetClassifiersCommandInput,
  ...additionalArguments: any
): Paginator<GetClassifiersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetClassifiersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
