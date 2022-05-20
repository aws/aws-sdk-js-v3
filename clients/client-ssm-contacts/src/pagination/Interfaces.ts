// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SSMContacts } from "../SSMContacts";
import { SSMContactsClient } from "../SSMContactsClient";

export interface SSMContactsPaginationConfiguration extends PaginationConfiguration {
  client: SSMContacts | SSMContactsClient;
}
