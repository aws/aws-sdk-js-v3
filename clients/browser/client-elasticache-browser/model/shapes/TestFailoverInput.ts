import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestFailoverInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationGroupId", "NodeGroupId"],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    NodeGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
