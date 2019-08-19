import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ShuffleConfig: _Structure_ = {
  type: "structure",
  required: ["Seed"],
  members: {
    Seed: {
      shape: {
        type: "integer"
      }
    }
  }
};
