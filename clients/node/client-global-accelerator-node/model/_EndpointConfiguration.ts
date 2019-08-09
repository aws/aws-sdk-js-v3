import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndpointId: {
      shape: {
        type: "string"
      }
    },
    Weight: {
      shape: {
        type: "integer"
      }
    }
  }
};
