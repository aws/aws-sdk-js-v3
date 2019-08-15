import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartOnDemandReplicationRunInput: _Structure_ = {
  type: "structure",
  required: ["replicationJobId"],
  members: {
    replicationJobId: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    }
  }
};
