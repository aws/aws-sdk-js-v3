// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTaskTemplatesCommand,
  ListTaskTemplatesCommandInput,
  ListTaskTemplatesCommandOutput,
} from "../commands/ListTaskTemplatesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTaskTemplates: (
  config: ConnectPaginationConfiguration,
  input: ListTaskTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListTaskTemplatesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListTaskTemplatesCommandInput,
  ListTaskTemplatesCommandOutput
>(ConnectClient, ListTaskTemplatesCommand, "NextToken", "NextToken", "MaxResults");
