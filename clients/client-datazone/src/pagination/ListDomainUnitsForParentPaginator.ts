// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDomainUnitsForParentCommand,
  ListDomainUnitsForParentCommandInput,
  ListDomainUnitsForParentCommandOutput,
} from "../commands/ListDomainUnitsForParentCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainUnitsForParent: (
  config: DataZonePaginationConfiguration,
  input: ListDomainUnitsForParentCommandInput,
  ...rest: any[]
) => Paginator<ListDomainUnitsForParentCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListDomainUnitsForParentCommandInput,
  ListDomainUnitsForParentCommandOutput
>(DataZoneClient, ListDomainUnitsForParentCommand, "nextToken", "nextToken", "maxResults");
