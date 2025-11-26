// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImageSetVersionsCommand,
  ListImageSetVersionsCommandInput,
  ListImageSetVersionsCommandOutput,
} from "../commands/ListImageSetVersionsCommand";
import { MedicalImagingClient } from "../MedicalImagingClient";
import { MedicalImagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImageSetVersions: (
  config: MedicalImagingPaginationConfiguration,
  input: ListImageSetVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListImageSetVersionsCommandOutput> = createPaginator<
  MedicalImagingPaginationConfiguration,
  ListImageSetVersionsCommandInput,
  ListImageSetVersionsCommandOutput
>(MedicalImagingClient, ListImageSetVersionsCommand, "nextToken", "nextToken", "maxResults");
