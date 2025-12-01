// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSupportedInstanceTypesCommand,
  ListSupportedInstanceTypesCommandInput,
  ListSupportedInstanceTypesCommandOutput,
} from "../commands/ListSupportedInstanceTypesCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSupportedInstanceTypes: (
  config: EMRPaginationConfiguration,
  input: ListSupportedInstanceTypesCommandInput,
  ...rest: any[]
) => Paginator<ListSupportedInstanceTypesCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListSupportedInstanceTypesCommandInput,
  ListSupportedInstanceTypesCommandOutput
>(EMRClient, ListSupportedInstanceTypesCommand, "Marker", "Marker", "");
