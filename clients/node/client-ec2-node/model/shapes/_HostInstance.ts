import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HostInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    }
  }
};
