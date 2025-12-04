// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListByoipCidrsCommand,
  ListByoipCidrsCommandInput,
  ListByoipCidrsCommandOutput,
} from "../commands/ListByoipCidrsCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListByoipCidrs: (
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListByoipCidrsCommandInput,
  ...rest: any[]
) => Paginator<ListByoipCidrsCommandOutput> = createPaginator<
  GlobalAcceleratorPaginationConfiguration,
  ListByoipCidrsCommandInput,
  ListByoipCidrsCommandOutput
>(GlobalAcceleratorClient, ListByoipCidrsCommand, "NextToken", "NextToken", "MaxResults");
