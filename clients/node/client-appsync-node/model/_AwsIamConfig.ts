import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsIamConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    signingRegion: {
      shape: {
        type: "string"
      }
    },
    signingServiceName: {
      shape: {
        type: "string"
      }
    }
  }
};
