import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsJobExecutionsRolloutConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    maximumPerMinute: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
