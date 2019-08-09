import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ShutdownEventConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExecutionTimeout: {
      shape: {
        type: "integer"
      }
    },
    DelayUntilElbConnectionsDrained: {
      shape: {
        type: "boolean"
      }
    }
  }
};
