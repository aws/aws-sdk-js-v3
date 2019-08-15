import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPlatformApplicationAttributesInput: _Structure_ = {
  type: "structure",
  required: ["PlatformApplicationArn"],
  members: {
    PlatformApplicationArn: {
      shape: {
        type: "string"
      }
    }
  }
};
