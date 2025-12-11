// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstanceAttributesCommand,
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput,
} from "../commands/ListInstanceAttributesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstanceAttributes: (
  config: ConnectPaginationConfiguration,
  input: ListInstanceAttributesCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceAttributesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListInstanceAttributesCommandInput,
  ListInstanceAttributesCommandOutput
>(ConnectClient, ListInstanceAttributesCommand, "NextToken", "NextToken", "MaxResults");
