import { _MapStringToString } from "./_MapStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetPlatformApplicationAttributesInput: _Structure_ = {
  type: "structure",
  required: ["PlatformApplicationArn", "Attributes"],
  members: {
    PlatformApplicationArn: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _MapStringToString
    }
  }
};
