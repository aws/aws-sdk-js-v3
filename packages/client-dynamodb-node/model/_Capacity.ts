import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Capacity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReadCapacityUnits: {
      shape: {
        type: "float"
      }
    },
    WriteCapacityUnits: {
      shape: {
        type: "float"
      }
    },
    CapacityUnits: {
      shape: {
        type: "float"
      }
    }
  }
};
