import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeFpgaImagesCommand,
  DescribeFpgaImagesCommandInput,
  DescribeFpgaImagesCommandOutput,
} from "../commands/DescribeFpgaImagesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeFpgaImagesCommandInput,
  ...args: any
): Promise<DescribeFpgaImagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFpgaImagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeFpgaImagesCommandInput,
  ...args: any
): Promise<DescribeFpgaImagesCommandOutput> => {
  // @ts-ignore
  return await client.describeFpgaImages(input, ...args);
};
export async function* paginateDescribeFpgaImages(
  config: EC2PaginationConfiguration,
  input: DescribeFpgaImagesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFpgaImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFpgaImagesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
