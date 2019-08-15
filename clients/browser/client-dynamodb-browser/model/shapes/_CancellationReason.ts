import { _AttributeMap } from "./_AttributeMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CancellationReason: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Item: {
      shape: _AttributeMap
    },
    Code: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  }
};
