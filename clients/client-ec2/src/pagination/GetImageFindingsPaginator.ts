// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetImageFindingsCommand,
  GetImageFindingsCommandInput,
  GetImageFindingsCommandOutput,
} from "../commands/GetImageFindingsCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetImageFindings: (
  config: EC2PaginationConfiguration,
  input: GetImageFindingsCommandInput,
  ...rest: any[]
) => Paginator<GetImageFindingsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetImageFindingsCommandInput,
  GetImageFindingsCommandOutput
>(EC2Client, GetImageFindingsCommand, "NextToken", "NextToken", "MaxResults");
