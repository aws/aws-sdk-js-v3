// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFolderContentsCommand,
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput,
} from "../commands/DescribeFolderContentsCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFolderContents: (
  config: WorkDocsPaginationConfiguration,
  input: DescribeFolderContentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeFolderContentsCommandOutput> = createPaginator<
  WorkDocsPaginationConfiguration,
  DescribeFolderContentsCommandInput,
  DescribeFolderContentsCommandOutput
>(WorkDocsClient, DescribeFolderContentsCommand, "Marker", "Marker", "Limit");
