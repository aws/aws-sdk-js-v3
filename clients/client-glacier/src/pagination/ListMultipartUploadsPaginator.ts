// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMultipartUploadsCommand,
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "../commands/ListMultipartUploadsCommand";
import { GlacierClient } from "../GlacierClient";
import { GlacierPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMultipartUploads: (
  config: GlacierPaginationConfiguration,
  input: ListMultipartUploadsCommandInput,
  ...rest: any[]
) => Paginator<ListMultipartUploadsCommandOutput> = createPaginator<
  GlacierPaginationConfiguration,
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput
>(GlacierClient, ListMultipartUploadsCommand, "marker", "Marker", "limit");
