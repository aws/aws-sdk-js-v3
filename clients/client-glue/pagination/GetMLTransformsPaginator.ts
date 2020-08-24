import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  GetMLTransformsCommand,
  GetMLTransformsCommandInput,
  GetMLTransformsCommandOutput,
} from "../commands/GetMLTransformsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GlueClient,
  input: GetMLTransformsCommandInput,
  ...args: any
): Promise<GetMLTransformsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetMLTransformsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Glue,
  input: GetMLTransformsCommandInput,
  ...args: any
): Promise<GetMLTransformsCommandOutput> => {
  // @ts-ignore
  return await client.getMLTransforms(input, ...args);
};
export async function* getMLTransformsPaginate(
  config: GluePaginationConfiguration,
  input: GetMLTransformsCommandInput,
  ...additionalArguments: any
): Paginator<GetMLTransformsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetMLTransformsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
