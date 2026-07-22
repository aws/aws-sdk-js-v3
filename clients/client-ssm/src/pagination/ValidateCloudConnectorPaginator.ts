// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ValidateCloudConnectorCommand,
  ValidateCloudConnectorCommandInput,
  ValidateCloudConnectorCommandOutput,
} from "../commands/ValidateCloudConnectorCommand";
import { SSMClient } from "../SSMClient";
import type { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateValidateCloudConnector: (
  config: SSMPaginationConfiguration,
  input: ValidateCloudConnectorCommandInput,
  ...rest: any[]
) => Paginator<ValidateCloudConnectorCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ValidateCloudConnectorCommandInput,
  ValidateCloudConnectorCommandOutput
>(SSMClient, ValidateCloudConnectorCommand, "NextToken", "NextToken", "MaxResults");
