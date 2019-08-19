import { _MapStringToString } from "./_MapStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSMSAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    attributes: {
      shape: _MapStringToString
    }
  }
};
