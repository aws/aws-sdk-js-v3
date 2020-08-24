import { CodeDeploy } from "../CodeDeploy";
import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentConfigsCommand,
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput,
} from "../commands/ListDeploymentConfigsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListDeploymentConfigsCommandInput,
  ...args: any
): Promise<ListDeploymentConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentConfigsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeDeploy,
  input: ListDeploymentConfigsCommandInput,
  ...args: any
): Promise<ListDeploymentConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentConfigs(input, ...args);
};
export async function* listDeploymentConfigsPaginate(
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentConfigsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDeploymentConfigsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    if (config.client instanceof CodeDeploy) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeDeployClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeDeploy | CodeDeployClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
