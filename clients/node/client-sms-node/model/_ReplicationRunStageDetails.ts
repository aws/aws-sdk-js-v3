import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationRunStageDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    stage: {
      shape: {
        type: "string"
      }
    },
    stageProgress: {
      shape: {
        type: "string"
      }
    }
  }
};
