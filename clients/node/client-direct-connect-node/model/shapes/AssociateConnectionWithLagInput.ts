import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateConnectionWithLagInput: _Structure_ = {
  type: "structure",
  required: ["connectionId", "lagId"],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    },
    lagId: {
      shape: {
        type: "string"
      }
    }
  }
};
