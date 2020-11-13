import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import {
  GetBuiltinSlotTypesCommand,
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "../commands/GetBuiltinSlotTypesCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetBuiltinSlotTypesCommandInput,
  ...args: any
): Promise<GetBuiltinSlotTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetBuiltinSlotTypesCommand(input), ...args);
};
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetBuiltinSlotTypesCommandInput,
  ...args: any
): Promise<GetBuiltinSlotTypesCommandOutput> => {
  // @ts-ignore
  return await client.getBuiltinSlotTypes(input, ...args);
};
export async function* getBuiltinSlotTypesPaginate(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetBuiltinSlotTypesCommandInput,
  ...additionalArguments: any
): Paginator<GetBuiltinSlotTypesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetBuiltinSlotTypesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LexModelBuildingService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LexModelBuildingServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LexModelBuildingService | LexModelBuildingServiceClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
