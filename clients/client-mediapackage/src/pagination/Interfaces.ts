// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MediaPackage } from "../MediaPackage";
import { MediaPackageClient } from "../MediaPackageClient";

export interface MediaPackagePaginationConfiguration extends PaginationConfiguration {
  client: MediaPackage | MediaPackageClient;
}
