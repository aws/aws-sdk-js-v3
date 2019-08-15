import { _Paths } from "./_Paths";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InvalidationBatch: _Structure_ = {
  type: "structure",
  required: ["Paths", "CallerReference"],
  members: {
    Paths: {
      shape: _Paths
    },
    CallerReference: {
      shape: {
        type: "string"
      }
    }
  }
};
