import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceTargetDefinition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attribute: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    RequiresRecreation: {
      shape: {
        type: "string"
      }
    }
  }
};
