// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventStreamsCommand,
  ListEventStreamsCommandInput,
  ListEventStreamsCommandOutput,
} from "../commands/ListEventStreamsCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventStreams: (
  config: CustomerProfilesPaginationConfiguration,
  input: ListEventStreamsCommandInput,
  ...rest: any[]
) => Paginator<ListEventStreamsCommandOutput> = createPaginator<
  CustomerProfilesPaginationConfiguration,
  ListEventStreamsCommandInput,
  ListEventStreamsCommandOutput
>(CustomerProfilesClient, ListEventStreamsCommand, "NextToken", "NextToken", "MaxResults");
