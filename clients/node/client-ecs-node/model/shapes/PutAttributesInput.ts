import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAttributesInput: _Structure_ = {
  type: "structure",
  required: ["attributes"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    attributes: {
      shape: _Attributes
    }
  }
};
