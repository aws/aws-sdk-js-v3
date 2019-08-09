import { _PolicyAttributeDescriptions } from "./_PolicyAttributeDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyName: {
      shape: {
        type: "string"
      }
    },
    PolicyTypeName: {
      shape: {
        type: "string"
      }
    },
    PolicyAttributeDescriptions: {
      shape: _PolicyAttributeDescriptions
    }
  }
};
