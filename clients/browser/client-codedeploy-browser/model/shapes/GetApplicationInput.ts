import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetApplicationInput: _Structure_ = {
  type: "structure",
  required: ["applicationName"],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
