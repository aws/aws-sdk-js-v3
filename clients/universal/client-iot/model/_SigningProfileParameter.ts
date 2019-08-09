import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SigningProfileParameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificateArn: {
      shape: {
        type: "string"
      }
    },
    platform: {
      shape: {
        type: "string"
      }
    },
    certificatePathOnDevice: {
      shape: {
        type: "string"
      }
    }
  }
};
