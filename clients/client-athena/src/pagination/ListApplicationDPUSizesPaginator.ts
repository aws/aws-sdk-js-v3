// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListApplicationDPUSizesCommand,
  ListApplicationDPUSizesCommandInput,
  ListApplicationDPUSizesCommandOutput,
} from "../commands/ListApplicationDPUSizesCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationDPUSizes: (
  config: AthenaPaginationConfiguration,
  input: ListApplicationDPUSizesCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationDPUSizesCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListApplicationDPUSizesCommandInput,
  ListApplicationDPUSizesCommandOutput
>(AthenaClient, ListApplicationDPUSizesCommand, "NextToken", "NextToken", "MaxResults");
