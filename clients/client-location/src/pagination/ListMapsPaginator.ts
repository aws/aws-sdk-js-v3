// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListMapsCommand, ListMapsCommandInput, ListMapsCommandOutput } from "../commands/ListMapsCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMaps: (
  config: LocationPaginationConfiguration,
  input: ListMapsCommandInput,
  ...rest: any[]
) => Paginator<ListMapsCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ListMapsCommandInput,
  ListMapsCommandOutput
>(LocationClient, ListMapsCommand, "NextToken", "NextToken", "MaxResults");
