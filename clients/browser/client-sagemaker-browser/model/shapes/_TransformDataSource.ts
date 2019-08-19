import { _TransformS3DataSource } from "./_TransformS3DataSource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransformDataSource: _Structure_ = {
  type: "structure",
  required: ["S3DataSource"],
  members: {
    S3DataSource: {
      shape: _TransformS3DataSource
    }
  }
};
