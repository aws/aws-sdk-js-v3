import { DirectoryService } from "../DirectoryService";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import {
  DescribeDomainControllersCommand,
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
} from "../commands/DescribeDomainControllersCommand";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DirectoryServiceClient,
  input: DescribeDomainControllersCommandInput,
  ...args: any
): Promise<DescribeDomainControllersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDomainControllersCommand(input), ...args);
};
const makePagedRequest = async (
  client: DirectoryService,
  input: DescribeDomainControllersCommandInput,
  ...args: any
): Promise<DescribeDomainControllersCommandOutput> => {
  // @ts-ignore
  return await client.describeDomainControllers(input, ...args);
};
export async function* describeDomainControllersPaginate(
  config: DirectoryServicePaginationConfiguration,
  input: DescribeDomainControllersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDomainControllersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDomainControllersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DirectoryService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DirectoryServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DirectoryService | DirectoryServiceClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
