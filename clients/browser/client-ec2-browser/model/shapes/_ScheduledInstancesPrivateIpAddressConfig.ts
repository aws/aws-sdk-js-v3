import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledInstancesPrivateIpAddressConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Primary: {
      shape: {
        type: "boolean"
      }
    },
    PrivateIpAddress: {
      shape: {
        type: "string"
      }
    }
  }
};
