import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComputeResourceUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    minvCpus: {
      shape: {
        type: "integer"
      }
    },
    maxvCpus: {
      shape: {
        type: "integer"
      }
    },
    desiredvCpus: {
      shape: {
        type: "integer"
      }
    }
  }
};
