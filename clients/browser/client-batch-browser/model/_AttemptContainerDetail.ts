import { _NetworkInterfaceList } from "./_NetworkInterfaceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttemptContainerDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    containerInstanceArn: {
      shape: {
        type: "string"
      }
    },
    taskArn: {
      shape: {
        type: "string"
      }
    },
    exitCode: {
      shape: {
        type: "integer"
      }
    },
    reason: {
      shape: {
        type: "string"
      }
    },
    logStreamName: {
      shape: {
        type: "string"
      }
    },
    networkInterfaces: {
      shape: _NetworkInterfaceList
    }
  }
};
