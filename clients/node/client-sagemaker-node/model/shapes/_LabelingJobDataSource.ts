import { _LabelingJobS3DataSource } from "./_LabelingJobS3DataSource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelingJobDataSource: _Structure_ = {
  type: "structure",
  required: ["S3DataSource"],
  members: {
    S3DataSource: {
      shape: _LabelingJobS3DataSource
    }
  }
};
