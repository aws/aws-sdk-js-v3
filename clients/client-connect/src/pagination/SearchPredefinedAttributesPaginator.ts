// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchPredefinedAttributesCommand,
  SearchPredefinedAttributesCommandInput,
  SearchPredefinedAttributesCommandOutput,
} from "../commands/SearchPredefinedAttributesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchPredefinedAttributes: (
  config: ConnectPaginationConfiguration,
  input: SearchPredefinedAttributesCommandInput,
  ...rest: any[]
) => Paginator<SearchPredefinedAttributesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  SearchPredefinedAttributesCommandInput,
  SearchPredefinedAttributesCommandOutput
>(ConnectClient, SearchPredefinedAttributesCommand, "NextToken", "NextToken", "MaxResults");
