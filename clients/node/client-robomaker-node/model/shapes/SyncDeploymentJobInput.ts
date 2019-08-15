import { Structure as _Structure_ } from "@aws-sdk/types";

export const SyncDeploymentJobInput: _Structure_ = {
  type: "structure",
  required: ["clientRequestToken", "fleet"],
  members: {
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    fleet: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
