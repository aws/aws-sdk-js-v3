import { RAM } from "../RAM";
import { RAMClient } from "../RAMClient";
import {
  GetResourceShareAssociationsCommand,
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
} from "../commands/GetResourceShareAssociationsCommand";
import { RAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RAMClient,
  input: GetResourceShareAssociationsCommandInput,
  ...args: any
): Promise<GetResourceShareAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourceShareAssociationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RAM,
  input: GetResourceShareAssociationsCommandInput,
  ...args: any
): Promise<GetResourceShareAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.getResourceShareAssociations(input, ...args);
};
export async function* getResourceShareAssociationsPaginate(
  config: RAMPaginationConfiguration,
  input: GetResourceShareAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<GetResourceShareAssociationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetResourceShareAssociationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
