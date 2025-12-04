// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SelectResourceConfigCommand,
  SelectResourceConfigCommandInput,
  SelectResourceConfigCommandOutput,
} from "../commands/SelectResourceConfigCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSelectResourceConfig: (
  config: ConfigServicePaginationConfiguration,
  input: SelectResourceConfigCommandInput,
  ...rest: any[]
) => Paginator<SelectResourceConfigCommandOutput> = createPaginator<
  ConfigServicePaginationConfiguration,
  SelectResourceConfigCommandInput,
  SelectResourceConfigCommandOutput
>(ConfigServiceClient, SelectResourceConfigCommand, "NextToken", "NextToken", "Limit");
