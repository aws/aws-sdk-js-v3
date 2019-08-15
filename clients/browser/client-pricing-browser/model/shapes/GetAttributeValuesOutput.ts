import { _AttributeValueList } from "./_AttributeValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAttributeValuesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeValues: {
      shape: _AttributeValueList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
