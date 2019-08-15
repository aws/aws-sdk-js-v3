import { _TrainingJob } from "./_TrainingJob";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SearchRecord: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrainingJob: {
      shape: _TrainingJob
    }
  }
};
