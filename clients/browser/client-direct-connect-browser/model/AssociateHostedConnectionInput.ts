import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateHostedConnectionInput: _Structure_ = {
  type: "structure",
  required: ["connectionId", "parentConnectionId"],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    },
    parentConnectionId: {
      shape: {
        type: "string"
      }
    }
  }
};
