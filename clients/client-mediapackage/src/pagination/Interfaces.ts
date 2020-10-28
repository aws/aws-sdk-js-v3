import { MediaPackage } from "../MediaPackage";
import { MediaPackageClient } from "../MediaPackageClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MediaPackagePaginationConfiguration extends PaginationConfiguration {
  client: MediaPackage | MediaPackageClient;
}
