// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDataTableAttributesCommand,
  ListDataTableAttributesCommandInput,
  ListDataTableAttributesCommandOutput,
} from "../commands/ListDataTableAttributesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataTableAttributes: (
  config: ConnectPaginationConfiguration,
  input: ListDataTableAttributesCommandInput,
  ...rest: any[]
) => Paginator<ListDataTableAttributesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListDataTableAttributesCommandInput,
  ListDataTableAttributesCommandOutput
>(ConnectClient, ListDataTableAttributesCommand, "NextToken", "NextToken", "MaxResults");
