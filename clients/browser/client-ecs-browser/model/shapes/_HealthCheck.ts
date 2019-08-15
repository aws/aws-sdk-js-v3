import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HealthCheck: _Structure_ = {
  type: "structure",
  required: ["command"],
  members: {
    command: {
      shape: _StringList
    },
    interval: {
      shape: {
        type: "integer"
      }
    },
    timeout: {
      shape: {
        type: "integer"
      }
    },
    retries: {
      shape: {
        type: "integer"
      }
    },
    startPeriod: {
      shape: {
        type: "integer"
      }
    }
  }
};
