// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MediaStore } from "../MediaStore";
import { MediaStoreClient } from "../MediaStoreClient";

export interface MediaStorePaginationConfiguration extends PaginationConfiguration {
  client: MediaStore | MediaStoreClient;
}
