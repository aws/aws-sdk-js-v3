import { RAM } from "../RAM";
import { RAMClient } from "../RAMClient";
import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RAMClient,
  input: GetResourcePoliciesCommandInput,
  ...args: any
): Promise<GetResourcePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourcePoliciesCommand(input, ...args));
};
const makePagedRequest = async (
  client: RAM,
  input: GetResourcePoliciesCommandInput,
  ...args: any
): Promise<GetResourcePoliciesCommandOutput> => {
  // @ts-ignore
  return await client.getResourcePolicies(input, ...args);
};
export async function* getResourcePoliciesPaginate(
  config: RAMPaginationConfiguration,
  input: GetResourcePoliciesCommandInput,
  ...additionalArguments: any
): Paginator<GetResourcePoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetResourcePoliciesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
