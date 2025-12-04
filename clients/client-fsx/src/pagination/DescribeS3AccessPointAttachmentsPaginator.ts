// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeS3AccessPointAttachmentsCommand,
  DescribeS3AccessPointAttachmentsCommandInput,
  DescribeS3AccessPointAttachmentsCommandOutput,
} from "../commands/DescribeS3AccessPointAttachmentsCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeS3AccessPointAttachments: (
  config: FSxPaginationConfiguration,
  input: DescribeS3AccessPointAttachmentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeS3AccessPointAttachmentsCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeS3AccessPointAttachmentsCommandInput,
  DescribeS3AccessPointAttachmentsCommandOutput
>(FSxClient, DescribeS3AccessPointAttachmentsCommand, "NextToken", "NextToken", "MaxResults");
