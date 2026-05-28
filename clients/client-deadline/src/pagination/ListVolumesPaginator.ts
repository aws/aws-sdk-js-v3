// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListVolumesCommand, ListVolumesCommandInput, ListVolumesCommandOutput } from "../commands/ListVolumesCommand";
import { DeadlineClient } from "../DeadlineClient";
import type { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListVolumes: (
  config: DeadlinePaginationConfiguration,
  input: ListVolumesCommandInput,
  ...rest: any[]
) => Paginator<ListVolumesCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListVolumesCommandInput,
  ListVolumesCommandOutput
>(DeadlineClient, ListVolumesCommand, "nextToken", "nextToken", "maxResults");
