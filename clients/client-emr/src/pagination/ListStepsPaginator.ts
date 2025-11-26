// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListStepsCommand, ListStepsCommandInput, ListStepsCommandOutput } from "../commands/ListStepsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSteps: (
  config: EMRPaginationConfiguration,
  input: ListStepsCommandInput,
  ...rest: any[]
) => Paginator<ListStepsCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListStepsCommandInput,
  ListStepsCommandOutput
>(EMRClient, ListStepsCommand, "Marker", "Marker", "");
