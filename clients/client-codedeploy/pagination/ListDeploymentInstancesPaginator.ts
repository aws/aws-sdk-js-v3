import { CodeDeploy } from "../CodeDeploy";
import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentInstancesCommand,
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
} from "../commands/ListDeploymentInstancesCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListDeploymentInstancesCommandInput,
  ...args: any
): Promise<ListDeploymentInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentInstancesCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeDeploy,
  input: ListDeploymentInstancesCommandInput,
  ...args: any
): Promise<ListDeploymentInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentInstances(input, ...args);
};
export async function* listDeploymentInstancesPaginate(
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDeploymentInstancesCommandOutput;
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
