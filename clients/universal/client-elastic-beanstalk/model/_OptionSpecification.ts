import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OptionSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Namespace: {
      shape: {
        type: "string"
      }
    },
    OptionName: {
      shape: {
        type: "string"
      }
    }
  }
};
