import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUsagePlanKeyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    }
  }
};
