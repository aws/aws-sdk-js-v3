import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetNetworkProfileInput: _Structure_ = {
  type: "structure",
  required: ["NetworkProfileArn"],
  members: {
    NetworkProfileArn: {
      shape: {
        type: "string"
      }
    }
  }
};
