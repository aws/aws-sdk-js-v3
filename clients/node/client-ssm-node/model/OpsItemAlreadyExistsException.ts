import { Structure as _Structure_ } from "@aws-sdk/types";

export const OpsItemAlreadyExistsException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    OpsItemId: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "OpsItemAlreadyExistsException"
};
