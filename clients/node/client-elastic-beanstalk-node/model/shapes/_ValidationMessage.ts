import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ValidationMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    Severity: {
      shape: {
        type: "string"
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
