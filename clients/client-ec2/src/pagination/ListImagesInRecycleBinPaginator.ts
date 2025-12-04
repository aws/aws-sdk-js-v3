// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImagesInRecycleBinCommand,
  ListImagesInRecycleBinCommandInput,
  ListImagesInRecycleBinCommandOutput,
} from "../commands/ListImagesInRecycleBinCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImagesInRecycleBin: (
  config: EC2PaginationConfiguration,
  input: ListImagesInRecycleBinCommandInput,
  ...rest: any[]
) => Paginator<ListImagesInRecycleBinCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  ListImagesInRecycleBinCommandInput,
  ListImagesInRecycleBinCommandOutput
>(EC2Client, ListImagesInRecycleBinCommand, "NextToken", "NextToken", "MaxResults");
