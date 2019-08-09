import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputConfig: _Structure_ = {
  type: "structure",
  required: ["S3OutputLocation", "TargetDevice"],
  members: {
    S3OutputLocation: {
      shape: {
        type: "string"
      }
    },
    TargetDevice: {
      shape: {
        type: "string"
      }
    }
  }
};
