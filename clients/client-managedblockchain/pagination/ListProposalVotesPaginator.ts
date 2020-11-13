import { ManagedBlockchain } from "../ManagedBlockchain";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient";
import {
  ListProposalVotesCommand,
  ListProposalVotesCommandInput,
  ListProposalVotesCommandOutput,
} from "../commands/ListProposalVotesCommand";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ManagedBlockchainClient,
  input: ListProposalVotesCommandInput,
  ...args: any
): Promise<ListProposalVotesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProposalVotesCommand(input), ...args);
};
const makePagedRequest = async (
  client: ManagedBlockchain,
  input: ListProposalVotesCommandInput,
  ...args: any
): Promise<ListProposalVotesCommandOutput> => {
  // @ts-ignore
  return await client.listProposalVotes(input, ...args);
};
export async function* listProposalVotesPaginate(
  config: ManagedBlockchainPaginationConfiguration,
  input: ListProposalVotesCommandInput,
  ...additionalArguments: any
): Paginator<ListProposalVotesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProposalVotesCommandOutput;
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
