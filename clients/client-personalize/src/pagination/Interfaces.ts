// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Personalize } from "../Personalize";
import { PersonalizeClient } from "../PersonalizeClient";

export interface PersonalizePaginationConfiguration extends PaginationConfiguration {
  client: Personalize | PersonalizeClient;
}
