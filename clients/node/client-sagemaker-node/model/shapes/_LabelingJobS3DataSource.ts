import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelingJobS3DataSource: _Structure_ = {
  type: "structure",
  required: ["ManifestS3Uri"],
  members: {
    ManifestS3Uri: {
      shape: {
        type: "string"
      }
    }
  }
};
