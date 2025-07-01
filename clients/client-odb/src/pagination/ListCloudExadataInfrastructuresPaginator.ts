// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListCloudExadataInfrastructuresCommand,
  ListCloudExadataInfrastructuresCommandInput,
  ListCloudExadataInfrastructuresCommandOutput,
} from "../commands/ListCloudExadataInfrastructuresCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCloudExadataInfrastructures: (
  config: OdbPaginationConfiguration,
  input: ListCloudExadataInfrastructuresCommandInput,
  ...rest: any[]
) => Paginator<ListCloudExadataInfrastructuresCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListCloudExadataInfrastructuresCommandInput,
  ListCloudExadataInfrastructuresCommandOutput
>(OdbClient, ListCloudExadataInfrastructuresCommand, "nextToken", "nextToken", "maxResults");
