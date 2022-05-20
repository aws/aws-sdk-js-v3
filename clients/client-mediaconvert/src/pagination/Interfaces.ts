// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MediaConvert } from "../MediaConvert";
import { MediaConvertClient } from "../MediaConvertClient";

export interface MediaConvertPaginationConfiguration extends PaginationConfiguration {
  client: MediaConvert | MediaConvertClient;
}
