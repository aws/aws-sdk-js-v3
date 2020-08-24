import { ECR } from "../ECR";
import { ECRClient } from "../ECRClient";
import {
  DescribeRepositoriesCommand,
  DescribeRepositoriesCommandInput,
  DescribeRepositoriesCommandOutput,
} from "../commands/DescribeRepositoriesCommand";
import { ECRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ECRClient,
  input: DescribeRepositoriesCommandInput,
  ...args: any
): Promise<DescribeRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRepositoriesCommand(input, ...args));
};
const makePagedRequest = async (
  client: ECR,
  input: DescribeRepositoriesCommandInput,
  ...args: any
): Promise<DescribeRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.describeRepositories(input, ...args);
};
export async function* describeRepositoriesPaginate(
  config: ECRPaginationConfiguration,
  input: DescribeRepositoriesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRepositoriesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeRepositoriesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECR | ECRClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
