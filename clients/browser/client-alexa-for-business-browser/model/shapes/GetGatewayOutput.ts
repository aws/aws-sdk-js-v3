import { _Gateway } from "./_Gateway";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGatewayOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Gateway: {
      shape: _Gateway
    }
  }
};
