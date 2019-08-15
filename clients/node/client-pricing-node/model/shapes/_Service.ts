import { _AttributeNameList } from "./_AttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Service: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceCode: {
      shape: {
        type: "string"
      }
    },
    AttributeNames: {
      shape: _AttributeNameList
    }
  }
};
