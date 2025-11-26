// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPartsCommand, ListPartsCommandInput, ListPartsCommandOutput } from "../commands/ListPartsCommand";
import { GlacierClient } from "../GlacierClient";
import { GlacierPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListParts: (
  config: GlacierPaginationConfiguration,
  input: ListPartsCommandInput,
  ...rest: any[]
) => Paginator<ListPartsCommandOutput> = createPaginator<
  GlacierPaginationConfiguration,
  ListPartsCommandInput,
  ListPartsCommandOutput
>(GlacierClient, ListPartsCommand, "marker", "Marker", "limit");
