import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobUnlockCodeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UnlockCode: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
