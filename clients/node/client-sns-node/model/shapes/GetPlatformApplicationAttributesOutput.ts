import { _MapStringToString } from "./_MapStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPlatformApplicationAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _MapStringToString
    }
  }
};
