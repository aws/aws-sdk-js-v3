// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKeyRotationsCommand,
  ListKeyRotationsCommandInput,
  ListKeyRotationsCommandOutput,
} from "../commands/ListKeyRotationsCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKeyRotations: (
  config: KMSPaginationConfiguration,
  input: ListKeyRotationsCommandInput,
  ...rest: any[]
) => Paginator<ListKeyRotationsCommandOutput> = createPaginator<
  KMSPaginationConfiguration,
  ListKeyRotationsCommandInput,
  ListKeyRotationsCommandOutput
>(KMSClient, ListKeyRotationsCommand, "Marker", "NextMarker", "Limit");
