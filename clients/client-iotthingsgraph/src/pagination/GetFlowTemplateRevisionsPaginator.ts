// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetFlowTemplateRevisionsCommand,
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput,
} from "../commands/GetFlowTemplateRevisionsCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFlowTemplateRevisions: (
  config: IoTThingsGraphPaginationConfiguration,
  input: GetFlowTemplateRevisionsCommandInput,
  ...rest: any[]
) => Paginator<GetFlowTemplateRevisionsCommandOutput> = createPaginator<
  IoTThingsGraphPaginationConfiguration,
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput
>(IoTThingsGraphClient, GetFlowTemplateRevisionsCommand, "nextToken", "nextToken", "maxResults");
