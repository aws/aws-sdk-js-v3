// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MediaTailor } from "../MediaTailor";
import { MediaTailorClient } from "../MediaTailorClient";

export interface MediaTailorPaginationConfiguration extends PaginationConfiguration {
  client: MediaTailor | MediaTailorClient;
}
