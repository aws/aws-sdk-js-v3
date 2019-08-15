import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEndpointsByPlatformApplicationInput: _Structure_ = {
  type: "structure",
  required: ["PlatformApplicationArn"],
  members: {
    PlatformApplicationArn: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
