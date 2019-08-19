import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisionedCapacityDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CapacityId: {
      shape: {
        type: "string"
      }
    },
    StartDate: {
      shape: {
        type: "string"
      }
    },
    ExpirationDate: {
      shape: {
        type: "string"
      }
    }
  }
};
