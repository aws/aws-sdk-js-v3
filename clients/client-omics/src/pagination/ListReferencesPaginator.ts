// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReferencesCommand,
  ListReferencesCommandInput,
  ListReferencesCommandOutput,
} from "../commands/ListReferencesCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReferences: (
  config: OmicsPaginationConfiguration,
  input: ListReferencesCommandInput,
  ...rest: any[]
) => Paginator<ListReferencesCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListReferencesCommandInput,
  ListReferencesCommandOutput
>(OmicsClient, ListReferencesCommand, "nextToken", "nextToken", "maxResults");
