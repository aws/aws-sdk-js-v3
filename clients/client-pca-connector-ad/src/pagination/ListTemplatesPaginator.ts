// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "../commands/ListTemplatesCommand";
import { PcaConnectorAdClient } from "../PcaConnectorAdClient";
import { PcaConnectorAdPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTemplates: (
  config: PcaConnectorAdPaginationConfiguration,
  input: ListTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListTemplatesCommandOutput> = createPaginator<
  PcaConnectorAdPaginationConfiguration,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput
>(PcaConnectorAdClient, ListTemplatesCommand, "NextToken", "NextToken", "MaxResults");
