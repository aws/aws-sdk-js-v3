// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "../commands/DescribeEngineDefaultParametersCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeEngineDefaultParametersCommandInput,
  ...args: any
): Promise<DescribeEngineDefaultParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEngineDefaultParametersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeEngineDefaultParameters(
  config: RDSPaginationConfiguration,
  input: DescribeEngineDefaultParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEngineDefaultParametersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEngineDefaultParametersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    const prevToken = token;
    token = page.EngineDefaults!.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
