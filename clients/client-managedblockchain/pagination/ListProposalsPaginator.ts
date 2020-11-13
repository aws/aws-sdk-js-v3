import { ManagedBlockchain } from "../ManagedBlockchain";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import {
  ListProposalsCommand,
  ListProposalsCommandInput,
  ListProposalsCommandOutput,
} from "../commands/ListProposalsCommand";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ManagedBlockchainClient,
  input: ListProposalsCommandInput,
  ...args: any
): Promise<ListProposalsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProposalsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ManagedBlockchain,
  input: ListProposalsCommandInput,
  ...args: any
): Promise<ListProposalsCommandOutput> => {
  // @ts-ignore
  return await client.listProposals(input, ...args);
};
export async function* listProposalsPaginate(
  config: ManagedBlockchainPaginationConfiguration,
  input: ListProposalsCommandInput,
  ...additionalArguments: any
): Paginator<ListProposalsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProposalsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ManagedBlockchain) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ManagedBlockchainClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ManagedBlockchain | ManagedBlockchainClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
