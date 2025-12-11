// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFpgaImagesCommand,
  DescribeFpgaImagesCommandInput,
  DescribeFpgaImagesCommandOutput,
} from "../commands/DescribeFpgaImagesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFpgaImages: (
  config: EC2PaginationConfiguration,
  input: DescribeFpgaImagesCommandInput,
  ...rest: any[]
) => Paginator<DescribeFpgaImagesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeFpgaImagesCommandInput,
  DescribeFpgaImagesCommandOutput
>(EC2Client, DescribeFpgaImagesCommand, "NextToken", "NextToken", "MaxResults");
