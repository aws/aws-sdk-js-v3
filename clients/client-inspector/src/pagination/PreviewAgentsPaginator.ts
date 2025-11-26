// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  PreviewAgentsCommand,
  PreviewAgentsCommandInput,
  PreviewAgentsCommandOutput,
} from "../commands/PreviewAgentsCommand";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginatePreviewAgents: (
  config: InspectorPaginationConfiguration,
  input: PreviewAgentsCommandInput,
  ...rest: any[]
) => Paginator<PreviewAgentsCommandOutput> = createPaginator<
  InspectorPaginationConfiguration,
  PreviewAgentsCommandInput,
  PreviewAgentsCommandOutput
>(InspectorClient, PreviewAgentsCommand, "nextToken", "nextToken", "maxResults");
