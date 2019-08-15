import { Structure as _Structure_ } from "@aws-sdk/types";

export const RebootReplicationInstanceInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationInstanceArn"],
  members: {
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    },
    ForceFailover: {
      shape: {
        type: "boolean"
      }
    }
  }
};
