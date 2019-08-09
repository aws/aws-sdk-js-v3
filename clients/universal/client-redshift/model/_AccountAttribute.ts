import { _AttributeValueList } from "./_AttributeValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountAttribute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeName: {
      shape: {
        type: "string"
      }
    },
    AttributeValues: {
      shape: _AttributeValueList
    }
  }
};
