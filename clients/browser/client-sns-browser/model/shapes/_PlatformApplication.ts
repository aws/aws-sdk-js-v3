import { _MapStringToString } from "./_MapStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlatformApplication: _Structure_ = {
  type: "structure",
  required: [],
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
