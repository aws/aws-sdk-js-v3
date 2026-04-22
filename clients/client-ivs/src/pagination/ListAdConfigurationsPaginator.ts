// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAdConfigurationsCommand,
  ListAdConfigurationsCommandInput,
  ListAdConfigurationsCommandOutput,
} from "../commands/ListAdConfigurationsCommand";
import { IvsClient } from "../IvsClient";
import type { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAdConfigurations: (
  config: IvsPaginationConfiguration,
  input: ListAdConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListAdConfigurationsCommandOutput> = createPaginator<
  IvsPaginationConfiguration,
  ListAdConfigurationsCommandInput,
  ListAdConfigurationsCommandOutput
>(IvsClient, ListAdConfigurationsCommand, "nextToken", "nextToken", "maxResults");
