// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDesignationsCommand,
  ListDesignationsCommandInput,
  ListDesignationsCommandOutput,
} from "../commands/ListDesignationsCommand";
import { DataZoneClient } from "../DataZoneClient";
import type { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDesignations: (
  config: DataZonePaginationConfiguration,
  input: ListDesignationsCommandInput,
  ...rest: any[]
) => Paginator<ListDesignationsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListDesignationsCommandInput,
  ListDesignationsCommandOutput
>(DataZoneClient, ListDesignationsCommand, "nextToken", "nextToken", "maxResults");
