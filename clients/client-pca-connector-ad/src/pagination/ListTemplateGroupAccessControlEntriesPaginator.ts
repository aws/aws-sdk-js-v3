// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplateGroupAccessControlEntriesCommand,
  ListTemplateGroupAccessControlEntriesCommandInput,
  ListTemplateGroupAccessControlEntriesCommandOutput,
} from "../commands/ListTemplateGroupAccessControlEntriesCommand";
import { PcaConnectorAdClient } from "../PcaConnectorAdClient";
import { PcaConnectorAdPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplateGroupAccessControlEntries: (
  config: PcaConnectorAdPaginationConfiguration,
  input: ListTemplateGroupAccessControlEntriesCommandInput,
  ...rest: any[]
) => Paginator<ListTemplateGroupAccessControlEntriesCommandOutput> = createPaginator<
  PcaConnectorAdPaginationConfiguration,
  ListTemplateGroupAccessControlEntriesCommandInput,
  ListTemplateGroupAccessControlEntriesCommandOutput
>(PcaConnectorAdClient, ListTemplateGroupAccessControlEntriesCommand, "NextToken", "NextToken", "MaxResults");
