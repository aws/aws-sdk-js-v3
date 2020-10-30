import { MediaPackageVod } from "../MediaPackageVod";
import { MediaPackageVodClient } from "../MediaPackageVodClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MediaPackageVodPaginationConfiguration extends PaginationConfiguration {
  client: MediaPackageVod | MediaPackageVodClient;
}
