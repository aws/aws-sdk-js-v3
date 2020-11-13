import { Support } from "../Support";
import { SupportClient } from "../SupportClient";
import {
  DescribeCasesCommand,
  DescribeCasesCommandInput,
  DescribeCasesCommandOutput,
} from "../commands/DescribeCasesCommand";
import { SupportPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SupportClient,
  input: DescribeCasesCommandInput,
  ...args: any
): Promise<DescribeCasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCasesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Support,
  input: DescribeCasesCommandInput,
  ...args: any
): Promise<DescribeCasesCommandOutput> => {
  // @ts-ignore
  return await client.describeCases(input, ...args);
};
export async function* describeCasesPaginate(
  config: SupportPaginationConfiguration,
  input: DescribeCasesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCasesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCasesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Support) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SupportClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Support | SupportClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
