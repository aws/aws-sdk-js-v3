import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputConfig: _Structure_ = {
  type: "structure",
  required: ["S3Uri", "DataInputConfig", "Framework"],
  members: {
    S3Uri: {
      shape: {
        type: "string"
      }
    },
    DataInputConfig: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Framework: {
      shape: {
        type: "string"
      }
    }
  }
};
