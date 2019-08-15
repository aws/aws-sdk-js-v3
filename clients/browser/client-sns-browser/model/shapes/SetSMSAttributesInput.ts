import { _MapStringToString } from "./_MapStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetSMSAttributesInput: _Structure_ = {
  type: "structure",
  required: ["attributes"],
  members: {
    attributes: {
      shape: _MapStringToString
    }
  }
};
