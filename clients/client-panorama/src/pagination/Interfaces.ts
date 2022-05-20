// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Panorama } from "../Panorama";
import { PanoramaClient } from "../PanoramaClient";

export interface PanoramaPaginationConfiguration extends PaginationConfiguration {
  client: Panorama | PanoramaClient;
}
