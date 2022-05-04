// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MediaPackageVod } from "../MediaPackageVod";
import { MediaPackageVodClient } from "../MediaPackageVodClient";

export interface MediaPackageVodPaginationConfiguration extends PaginationConfiguration {
  client: MediaPackageVod | MediaPackageVodClient;
}
