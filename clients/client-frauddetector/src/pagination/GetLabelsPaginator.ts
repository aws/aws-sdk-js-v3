// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetLabelsCommand, GetLabelsCommandInput, GetLabelsCommandOutput } from "../commands/GetLabelsCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetLabels: (
  config: FraudDetectorPaginationConfiguration,
  input: GetLabelsCommandInput,
  ...rest: any[]
) => Paginator<GetLabelsCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetLabelsCommandInput,
  GetLabelsCommandOutput
>(FraudDetectorClient, GetLabelsCommand, "nextToken", "nextToken", "maxResults");
