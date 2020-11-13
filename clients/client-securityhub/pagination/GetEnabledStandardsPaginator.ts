import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import {
  GetEnabledStandardsCommand,
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "../commands/GetEnabledStandardsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: GetEnabledStandardsCommandInput,
  ...args: any
): Promise<GetEnabledStandardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEnabledStandardsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SecurityHub,
  input: GetEnabledStandardsCommandInput,
  ...args: any
): Promise<GetEnabledStandardsCommandOutput> => {
  // @ts-ignore
  return await client.getEnabledStandards(input, ...args);
};
export async function* getEnabledStandardsPaginate(
  config: SecurityHubPaginationConfiguration,
  input: GetEnabledStandardsCommandInput,
  ...additionalArguments: any
): Paginator<GetEnabledStandardsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEnabledStandardsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
