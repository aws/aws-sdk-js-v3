import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  GetPartitionsCommand,
  GetPartitionsCommandInput,
  GetPartitionsCommandOutput,
} from "../commands/GetPartitionsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetPartitionsCommandInput,
  ...args: any
): Promise<GetPartitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetPartitionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Glue,
  input: GetPartitionsCommandInput,
  ...args: any
): Promise<GetPartitionsCommandOutput> => {
  // @ts-ignore
  return await client.getPartitions(input, ...args);
};
export async function* getPartitionsPaginate(
  config: GluePaginationConfiguration,
  input: GetPartitionsCommandInput,
  ...additionalArguments: any
): Paginator<GetPartitionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetPartitionsCommandOutput;
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
