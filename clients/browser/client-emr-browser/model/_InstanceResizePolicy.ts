import { _EC2InstanceIdsList } from "./_EC2InstanceIdsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceResizePolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstancesToTerminate: {
      shape: _EC2InstanceIdsList
    },
    InstancesToProtect: {
      shape: _EC2InstanceIdsList
    },
    InstanceTerminationTimeout: {
      shape: {
        type: "integer"
      }
    }
  }
};
