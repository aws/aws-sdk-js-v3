import { _ScheduledInstancesEbs } from "./_ScheduledInstancesEbs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledInstancesBlockDeviceMapping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceName: {
      shape: {
        type: "string"
      }
    },
    Ebs: {
      shape: _ScheduledInstancesEbs
    },
    NoDevice: {
      shape: {
        type: "string"
      }
    },
    VirtualName: {
      shape: {
        type: "string"
      }
    }
  }
};
