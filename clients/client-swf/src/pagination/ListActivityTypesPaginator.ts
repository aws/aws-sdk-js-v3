// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListActivityTypesCommand,
  ListActivityTypesCommandInput,
  ListActivityTypesCommandOutput,
} from "../commands/ListActivityTypesCommand";
import { SWFClient } from "../SWFClient";
import { SWFPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActivityTypes: (
  config: SWFPaginationConfiguration,
  input: ListActivityTypesCommandInput,
  ...rest: any[]
) => Paginator<ListActivityTypesCommandOutput> = createPaginator<
  SWFPaginationConfiguration,
  ListActivityTypesCommandInput,
  ListActivityTypesCommandOutput
>(SWFClient, ListActivityTypesCommand, "nextPageToken", "nextPageToken", "maximumPageSize");
