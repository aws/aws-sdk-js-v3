import { Braket } from "../Braket";
import { BraketClient } from "../BraketClient";
import {
  SearchQuantumTasksCommand,
  SearchQuantumTasksCommandInput,
  SearchQuantumTasksCommandOutput,
} from "../commands/SearchQuantumTasksCommand";
import { BraketPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BraketClient,
  input: SearchQuantumTasksCommandInput,
  ...args: any
): Promise<SearchQuantumTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchQuantumTasksCommand(input), ...args);
};
const makePagedRequest = async (
  client: Braket,
  input: SearchQuantumTasksCommandInput,
  ...args: any
): Promise<SearchQuantumTasksCommandOutput> => {
  // @ts-ignore
  return await client.searchQuantumTasks(input, ...args);
};
export async function* searchQuantumTasksPaginate(
  config: BraketPaginationConfiguration,
  input: SearchQuantumTasksCommandInput,
  ...additionalArguments: any
): Paginator<SearchQuantumTasksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchQuantumTasksCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Braket) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BraketClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Braket | BraketClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
