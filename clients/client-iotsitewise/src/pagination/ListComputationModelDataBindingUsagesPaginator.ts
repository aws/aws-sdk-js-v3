// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListComputationModelDataBindingUsagesCommand,
  ListComputationModelDataBindingUsagesCommandInput,
  ListComputationModelDataBindingUsagesCommandOutput,
} from "../commands/ListComputationModelDataBindingUsagesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComputationModelDataBindingUsages: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListComputationModelDataBindingUsagesCommandInput,
  ...rest: any[]
) => Paginator<ListComputationModelDataBindingUsagesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListComputationModelDataBindingUsagesCommandInput,
  ListComputationModelDataBindingUsagesCommandOutput
>(IoTSiteWiseClient, ListComputationModelDataBindingUsagesCommand, "nextToken", "nextToken", "maxResults");
