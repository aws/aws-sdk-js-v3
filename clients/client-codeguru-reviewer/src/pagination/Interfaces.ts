// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CodeGuruReviewer } from "../CodeGuruReviewer";
import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";

export interface CodeGuruReviewerPaginationConfiguration extends PaginationConfiguration {
  client: CodeGuruReviewer | CodeGuruReviewerClient;
}
