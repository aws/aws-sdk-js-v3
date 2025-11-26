// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListJobTemplatesCommand,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput,
} from "../commands/ListJobTemplatesCommand";
import { EMRContainersClient } from "../EMRContainersClient";
import { EMRContainersPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobTemplates: (
  config: EMRContainersPaginationConfiguration,
  input: ListJobTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListJobTemplatesCommandOutput> = createPaginator<
  EMRContainersPaginationConfiguration,
  ListJobTemplatesCommandInput,
  ListJobTemplatesCommandOutput
>(EMRContainersClient, ListJobTemplatesCommand, "nextToken", "nextToken", "maxResults");
