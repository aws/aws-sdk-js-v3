import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailableProcessorFeature: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    DefaultValue: {
      shape: {
        type: "string"
      }
    },
    AllowedValues: {
      shape: {
        type: "string"
      }
    }
  }
};
