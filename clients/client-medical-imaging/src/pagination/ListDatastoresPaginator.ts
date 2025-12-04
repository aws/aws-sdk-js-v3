// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatastoresCommand,
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput,
} from "../commands/ListDatastoresCommand";
import { MedicalImagingClient } from "../MedicalImagingClient";
import { MedicalImagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatastores: (
  config: MedicalImagingPaginationConfiguration,
  input: ListDatastoresCommandInput,
  ...rest: any[]
) => Paginator<ListDatastoresCommandOutput> = createPaginator<
  MedicalImagingPaginationConfiguration,
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput
>(MedicalImagingClient, ListDatastoresCommand, "nextToken", "nextToken", "maxResults");
