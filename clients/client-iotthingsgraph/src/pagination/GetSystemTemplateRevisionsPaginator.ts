// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSystemTemplateRevisionsCommand,
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput,
} from "../commands/GetSystemTemplateRevisionsCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSystemTemplateRevisions: (
  config: IoTThingsGraphPaginationConfiguration,
  input: GetSystemTemplateRevisionsCommandInput,
  ...rest: any[]
) => Paginator<GetSystemTemplateRevisionsCommandOutput> = createPaginator<
  IoTThingsGraphPaginationConfiguration,
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput
>(IoTThingsGraphClient, GetSystemTemplateRevisionsCommand, "nextToken", "nextToken", "maxResults");
