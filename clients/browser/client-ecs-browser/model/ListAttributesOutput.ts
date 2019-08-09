import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    attributes: {
      shape: _Attributes
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
