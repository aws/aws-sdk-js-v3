// smithy-typescript generated code
import type { PaginationConfiguration } from "@smithy/types";

import { S3FilesClient } from "../S3FilesClient";

/**
 * @public
 */
export interface S3FilesPaginationConfiguration extends PaginationConfiguration {
  client: S3FilesClient;
}
