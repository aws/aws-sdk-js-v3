import { _InstanceIdentity } from "./_InstanceIdentity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PollForTaskInput: _Structure_ = {
  type: "structure",
  required: ["workerGroup"],
  members: {
    workerGroup: {
      shape: {
        type: "string"
      }
    },
    hostname: {
      shape: {
        type: "string",
        min: 1
      }
    },
    instanceIdentity: {
      shape: _InstanceIdentity
    }
  }
};
