import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActiveInstance: _Structure_ = {
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
    },
    SpotInstanceRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotInstanceRequestId"
    },
    InstanceHealth: {
      shape: {
        type: "string"
      },
      locationName: "instanceHealth"
    }
  }
};
