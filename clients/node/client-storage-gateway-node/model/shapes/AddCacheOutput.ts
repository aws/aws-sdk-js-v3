import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddCacheOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
