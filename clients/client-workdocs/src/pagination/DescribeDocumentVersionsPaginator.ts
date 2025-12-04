// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDocumentVersionsCommand,
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput,
} from "../commands/DescribeDocumentVersionsCommand";
import { WorkDocsClient } from "../WorkDocsClient";
import { WorkDocsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDocumentVersions: (
  config: WorkDocsPaginationConfiguration,
  input: DescribeDocumentVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeDocumentVersionsCommandOutput> = createPaginator<
  WorkDocsPaginationConfiguration,
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput
>(WorkDocsClient, DescribeDocumentVersionsCommand, "Marker", "Marker", "Limit");
