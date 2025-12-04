// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeCommunicationsCommand,
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput,
} from "../commands/DescribeCommunicationsCommand";
import { SupportClient } from "../SupportClient";
import { SupportPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeCommunications: (
  config: SupportPaginationConfiguration,
  input: DescribeCommunicationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeCommunicationsCommandOutput> = createPaginator<
  SupportPaginationConfiguration,
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput
>(SupportClient, DescribeCommunicationsCommand, "nextToken", "nextToken", "maxResults");
