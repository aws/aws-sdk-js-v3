// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetListElementsCommand,
  GetListElementsCommandInput,
  GetListElementsCommandOutput,
} from "../commands/GetListElementsCommand";
import { FraudDetectorClient } from "../FraudDetectorClient";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetListElements: (
  config: FraudDetectorPaginationConfiguration,
  input: GetListElementsCommandInput,
  ...rest: any[]
) => Paginator<GetListElementsCommandOutput> = createPaginator<
  FraudDetectorPaginationConfiguration,
  GetListElementsCommandInput,
  GetListElementsCommandOutput
>(FraudDetectorClient, GetListElementsCommand, "nextToken", "nextToken", "maxResults");
