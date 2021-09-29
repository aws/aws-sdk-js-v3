import { MediaTailor } from "../MediaTailor";
import { MediaTailorClient } from "../MediaTailorClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MediaTailorPaginationConfiguration extends PaginationConfiguration {
  client: MediaTailor | MediaTailorClient;
}
