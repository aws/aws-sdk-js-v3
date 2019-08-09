import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssociatedGateway: _Structure_ = {
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
    ownerAccount: {
      shape: {
        type: "string"
      }
    },
    region: {
      shape: {
        type: "string"
      }
    }
  }
};
