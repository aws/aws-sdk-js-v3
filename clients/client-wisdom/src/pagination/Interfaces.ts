// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Wisdom } from "../Wisdom";
import { WisdomClient } from "../WisdomClient";

export interface WisdomPaginationConfiguration extends PaginationConfiguration {
  client: Wisdom | WisdomClient;
}
