import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfirmDeviceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserConfirmationNecessary: {
      shape: {
        type: "boolean"
      }
    }
  }
};
