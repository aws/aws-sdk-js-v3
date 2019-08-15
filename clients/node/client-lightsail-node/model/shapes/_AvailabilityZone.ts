import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailabilityZone: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    zoneName: {
      shape: {
        type: "string"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    }
  }
};
