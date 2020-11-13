import { Neptune } from "../Neptune";
import { NeptuneClient } from "../NeptuneClient";
import {
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "../commands/DescribeEngineDefaultParametersCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeEngineDefaultParametersCommandInput,
  ...args: any
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEngineDefaultParametersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Neptune,
  input: DescribeEngineDefaultParametersCommandInput,
  ...args: any
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeEngineDefaultParameters(input, ...args);
};
export async function* describeEngineDefaultParametersPaginate(
  config: NeptunePaginationConfiguration,
  input: DescribeEngineDefaultParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEngineDefaultParametersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEngineDefaultParametersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Neptune) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NeptuneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Neptune | NeptuneClient");
    }
    yield page;
    token = page.EngineDefaults!.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
