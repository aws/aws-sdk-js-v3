import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputDataConfig: _Structure_ = {
  type: "structure",
  required: ["S3Uri"],
  members: {
    S3Uri: {
      shape: {
        type: "string"
      }
    },
    InputFormat: {
      shape: {
        type: "string"
      }
    }
  }
};
