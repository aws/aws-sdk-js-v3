// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDICOMImportJobsCommand,
  ListDICOMImportJobsCommandInput,
  ListDICOMImportJobsCommandOutput,
} from "../commands/ListDICOMImportJobsCommand";
import { MedicalImagingClient } from "../MedicalImagingClient";
import { MedicalImagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDICOMImportJobs: (
  config: MedicalImagingPaginationConfiguration,
  input: ListDICOMImportJobsCommandInput,
  ...rest: any[]
) => Paginator<ListDICOMImportJobsCommandOutput> = createPaginator<
  MedicalImagingPaginationConfiguration,
  ListDICOMImportJobsCommandInput,
  ListDICOMImportJobsCommandOutput
>(MedicalImagingClient, ListDICOMImportJobsCommand, "nextToken", "nextToken", "maxResults");
