// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDirectoryRegistrationsCommand,
  ListDirectoryRegistrationsCommandInput,
  ListDirectoryRegistrationsCommandOutput,
} from "../commands/ListDirectoryRegistrationsCommand";
import { PcaConnectorAdClient } from "../PcaConnectorAdClient";
import { PcaConnectorAdPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDirectoryRegistrations: (
  config: PcaConnectorAdPaginationConfiguration,
  input: ListDirectoryRegistrationsCommandInput,
  ...rest: any[]
) => Paginator<ListDirectoryRegistrationsCommandOutput> = createPaginator<
  PcaConnectorAdPaginationConfiguration,
  ListDirectoryRegistrationsCommandInput,
  ListDirectoryRegistrationsCommandOutput
>(PcaConnectorAdClient, ListDirectoryRegistrationsCommand, "NextToken", "NextToken", "MaxResults");
