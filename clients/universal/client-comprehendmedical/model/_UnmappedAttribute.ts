import { _Attribute } from "./_Attribute";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UnmappedAttribute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Attribute: {
      shape: _Attribute
    }
  }
};
