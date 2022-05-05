// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Translate } from "../Translate";
import { TranslateClient } from "../TranslateClient";

export interface TranslatePaginationConfiguration extends PaginationConfiguration {
  client: Translate | TranslateClient;
}
