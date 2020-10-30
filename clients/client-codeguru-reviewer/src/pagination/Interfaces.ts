import { CodeGuruReviewer } from "../CodeGuruReviewer";
import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CodeGuruReviewerPaginationConfiguration extends PaginationConfiguration {
  client: CodeGuruReviewer | CodeGuruReviewerClient;
}
