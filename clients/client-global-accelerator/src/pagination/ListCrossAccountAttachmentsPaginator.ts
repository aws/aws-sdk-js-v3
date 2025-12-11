// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCrossAccountAttachmentsCommand,
  ListCrossAccountAttachmentsCommandInput,
  ListCrossAccountAttachmentsCommandOutput,
} from "../commands/ListCrossAccountAttachmentsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCrossAccountAttachments: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCrossAccountAttachmentsCommandInput,
  ...rest: any[]
) => Paginator<ListCrossAccountAttachmentsCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListCrossAccountAttachmentsCommandInput,
  ListCrossAccountAttachmentsCommandOutput
>(GlobalAcceleratorClient, ListCrossAccountAttachmentsCommand, "NextToken", "NextToken", "MaxResults");
