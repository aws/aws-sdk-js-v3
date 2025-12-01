// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAcceleratorsCommand,
  ListAcceleratorsCommandInput,
  ListAcceleratorsCommandOutput,
} from "../commands/ListAcceleratorsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccelerators: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListAcceleratorsCommandInput,
  ...rest: any[]
) => Paginator<ListAcceleratorsCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListAcceleratorsCommandInput,
  ListAcceleratorsCommandOutput
>(GlobalAcceleratorClient, ListAcceleratorsCommand, "NextToken", "NextToken", "MaxResults");
