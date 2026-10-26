// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFailoverSlateConfigurationsCommand,
  ListFailoverSlateConfigurationsCommandInput,
  ListFailoverSlateConfigurationsCommandOutput,
} from "../commands/ListFailoverSlateConfigurationsCommand";
import { IvsClient } from "../IvsClient";
import type { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFailoverSlateConfigurations: (
  config: IvsPaginationConfiguration,
  input: ListFailoverSlateConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListFailoverSlateConfigurationsCommandOutput> = createPaginator<
  IvsPaginationConfiguration,
  ListFailoverSlateConfigurationsCommandInput,
  ListFailoverSlateConfigurationsCommandOutput
>(IvsClient, ListFailoverSlateConfigurationsCommand, "nextToken", "nextToken", "maxResults");
