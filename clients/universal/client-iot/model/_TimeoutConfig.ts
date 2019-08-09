import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimeoutConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    inProgressTimeoutInMinutes: {
      shape: {
        type: "integer"
      }
    }
  }
};
