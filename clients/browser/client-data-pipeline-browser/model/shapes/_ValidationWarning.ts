import { _validationMessages } from "./_validationMessages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ValidationWarning: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    warnings: {
      shape: _validationMessages
    }
  }
};
