// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServicePrincipalNamesCommand,
  ListServicePrincipalNamesCommandInput,
  ListServicePrincipalNamesCommandOutput,
} from "../commands/ListServicePrincipalNamesCommand";
import { PcaConnectorAdClient } from "../PcaConnectorAdClient";
import { PcaConnectorAdPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServicePrincipalNames: (
  config: PcaConnectorAdPaginationConfiguration,
  input: ListServicePrincipalNamesCommandInput,
  ...rest: any[]
) => Paginator<ListServicePrincipalNamesCommandOutput> = createPaginator<
  PcaConnectorAdPaginationConfiguration,
  ListServicePrincipalNamesCommandInput,
  ListServicePrincipalNamesCommandOutput
>(PcaConnectorAdClient, ListServicePrincipalNamesCommand, "NextToken", "NextToken", "MaxResults");
