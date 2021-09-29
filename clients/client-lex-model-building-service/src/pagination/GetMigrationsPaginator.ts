import { LexModelBuildingService } from "../LexModelBuildingService";
import { LexModelBuildingServiceClient } from "../LexModelBuildingServiceClient";
import {
  GetMigrationsCommand,
  GetMigrationsCommandInput,
  GetMigrationsCommandOutput,
} from "../commands/GetMigrationsCommand";
import { LexModelBuildingServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LexModelBuildingServiceClient,
  input: GetMigrationsCommandInput,
  ...args: any
): Promise<GetMigrationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetMigrationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LexModelBuildingService,
  input: GetMigrationsCommandInput,
  ...args: any
): Promise<GetMigrationsCommandOutput> => {
  // @ts-ignore
  return await client.getMigrations(input, ...args);
};
export async function* paginateGetMigrations(
  config: LexModelBuildingServicePaginationConfiguration,
  input: GetMigrationsCommandInput,
  ...additionalArguments: any
): Paginator<GetMigrationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetMigrationsCommandOutput;
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
