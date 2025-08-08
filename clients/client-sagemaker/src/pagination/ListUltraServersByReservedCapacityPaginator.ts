// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListUltraServersByReservedCapacityCommand,
  ListUltraServersByReservedCapacityCommandInput,
  ListUltraServersByReservedCapacityCommandOutput,
} from "../commands/ListUltraServersByReservedCapacityCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUltraServersByReservedCapacity: (
  config: SageMakerPaginationConfiguration,
  input: ListUltraServersByReservedCapacityCommandInput,
  ...rest: any[]
) => Paginator<ListUltraServersByReservedCapacityCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListUltraServersByReservedCapacityCommandInput,
  ListUltraServersByReservedCapacityCommandOutput
>(SageMakerClient, ListUltraServersByReservedCapacityCommand, "NextToken", "NextToken", "MaxResults");
