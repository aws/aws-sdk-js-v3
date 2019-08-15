import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ByoipCidr: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Cidr: {
      shape: {
        type: "string"
      },
      locationName: "cidr"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    StatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "statusMessage"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
