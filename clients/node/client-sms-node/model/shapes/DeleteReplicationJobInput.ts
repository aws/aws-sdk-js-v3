import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteReplicationJobInput: _Structure_ = {
  type: "structure",
  required: ["replicationJobId"],
  members: {
    replicationJobId: {
      shape: {
        type: "string"
      }
    }
  }
};
