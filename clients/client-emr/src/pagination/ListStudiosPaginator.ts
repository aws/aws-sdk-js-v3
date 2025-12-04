// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListStudiosCommand, ListStudiosCommandInput, ListStudiosCommandOutput } from "../commands/ListStudiosCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStudios: (
  config: EMRPaginationConfiguration,
  input: ListStudiosCommandInput,
  ...rest: any[]
) => Paginator<ListStudiosCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListStudiosCommandInput,
  ListStudiosCommandOutput
>(EMRClient, ListStudiosCommand, "Marker", "Marker", "");
