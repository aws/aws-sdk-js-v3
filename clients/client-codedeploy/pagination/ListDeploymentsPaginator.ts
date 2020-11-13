import { CodeDeploy } from "../CodeDeploy";
import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "../commands/ListDeploymentsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListDeploymentsCommandInput,
  ...args: any
): Promise<ListDeploymentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeDeploy,
  input: ListDeploymentsCommandInput,
  ...args: any
): Promise<ListDeploymentsCommandOutput> => {
  // @ts-ignore
  return await client.listDeployments(input, ...args);
};
export async function* listDeploymentsPaginate(
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodeDeploy) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeDeployClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeDeploy | CodeDeployClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
