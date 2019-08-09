import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceStatusDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImpairedSince: {
      shape: {
        type: "timestamp"
      },
      locationName: "impairedSince"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
