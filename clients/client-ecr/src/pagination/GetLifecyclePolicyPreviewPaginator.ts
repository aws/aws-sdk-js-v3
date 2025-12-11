// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetLifecyclePolicyPreviewCommand,
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput,
} from "../commands/GetLifecyclePolicyPreviewCommand";
import { ECRClient } from "../ECRClient";
import { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetLifecyclePolicyPreview: (
  config: ECRPaginationConfiguration,
  input: GetLifecyclePolicyPreviewCommandInput,
  ...rest: any[]
) => Paginator<GetLifecyclePolicyPreviewCommandOutput> = createPaginator<
  ECRPaginationConfiguration,
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput
>(ECRClient, GetLifecyclePolicyPreviewCommand, "nextToken", "nextToken", "maxResults");
