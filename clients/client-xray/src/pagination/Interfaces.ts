// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { XRay } from "../XRay";
import { XRayClient } from "../XRayClient";

export interface XRayPaginationConfiguration extends PaginationConfiguration {
  client: XRay | XRayClient;
}
