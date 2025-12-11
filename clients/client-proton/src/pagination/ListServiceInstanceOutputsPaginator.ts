// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListServiceInstanceOutputsCommand,
  ListServiceInstanceOutputsCommandInput,
  ListServiceInstanceOutputsCommandOutput,
} from "../commands/ListServiceInstanceOutputsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceInstanceOutputs: (
  config: ProtonPaginationConfiguration,
  input: ListServiceInstanceOutputsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceInstanceOutputsCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListServiceInstanceOutputsCommandInput,
  ListServiceInstanceOutputsCommandOutput
>(ProtonClient, ListServiceInstanceOutputsCommand, "nextToken", "nextToken", "");
