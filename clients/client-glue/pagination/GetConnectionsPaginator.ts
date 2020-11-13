import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  GetConnectionsCommand,
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput,
} from "../commands/GetConnectionsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetConnectionsCommandInput,
  ...args: any
): Promise<GetConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetConnectionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Glue,
  input: GetConnectionsCommandInput,
  ...args: any
): Promise<GetConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.getConnections(input, ...args);
};
export async function* getConnectionsPaginate(
  config: GluePaginationConfiguration,
  input: GetConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<GetConnectionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetConnectionsCommandOutput;
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
