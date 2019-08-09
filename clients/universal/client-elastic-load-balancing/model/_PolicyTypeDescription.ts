import { _PolicyAttributeTypeDescriptions } from "./_PolicyAttributeTypeDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyTypeDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyTypeName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    PolicyAttributeTypeDescriptions: {
      shape: _PolicyAttributeTypeDescriptions
    }
  }
};
