import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  GetDevEndpointsCommand,
  GetDevEndpointsCommandInput,
  GetDevEndpointsCommandOutput,
} from "../commands/GetDevEndpointsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetDevEndpointsCommandInput,
  ...args: any
): Promise<GetDevEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDevEndpointsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Glue,
  input: GetDevEndpointsCommandInput,
  ...args: any
): Promise<GetDevEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.getDevEndpoints(input, ...args);
};
export async function* getDevEndpointsPaginate(
  config: GluePaginationConfiguration,
  input: GetDevEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<GetDevEndpointsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDevEndpointsCommandOutput;
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
