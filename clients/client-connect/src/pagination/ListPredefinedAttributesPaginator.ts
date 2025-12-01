// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPredefinedAttributesCommand,
  ListPredefinedAttributesCommandInput,
  ListPredefinedAttributesCommandOutput,
} from "../commands/ListPredefinedAttributesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPredefinedAttributes: (
  config: ConnectPaginationConfiguration,
  input: ListPredefinedAttributesCommandInput,
  ...rest: any[]
) => Paginator<ListPredefinedAttributesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListPredefinedAttributesCommandInput,
  ListPredefinedAttributesCommandOutput
>(ConnectClient, ListPredefinedAttributesCommand, "NextToken", "NextToken", "MaxResults");
