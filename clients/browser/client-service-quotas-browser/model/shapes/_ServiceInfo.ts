import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceName: {
      shape: {
        type: "string"
      }
    }
  }
};
