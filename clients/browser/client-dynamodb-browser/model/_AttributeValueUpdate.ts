import { _AttributeValue } from "./_AttributeValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttributeValueUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: _AttributeValue
    },
    Action: {
      shape: {
        type: "string"
      }
    }
  }
};
