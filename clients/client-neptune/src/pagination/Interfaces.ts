// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Neptune } from "../Neptune";
import { NeptuneClient } from "../NeptuneClient";

export interface NeptunePaginationConfiguration extends PaginationConfiguration {
  client: Neptune | NeptuneClient;
}
