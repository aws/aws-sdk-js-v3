import { XRay } from "../XRay";
import { XRayClient } from "../XRayClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface XRayPaginationConfiguration extends PaginationConfiguration {
  client: XRay | XRayClient;
}
