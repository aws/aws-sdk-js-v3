import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisionedBandwidth: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisionTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "provisionTime"
    },
    Provisioned: {
      shape: {
        type: "string"
      },
      locationName: "provisioned"
    },
    RequestTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "requestTime"
    },
    Requested: {
      shape: {
        type: "string"
      },
      locationName: "requested"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    }
  }
};
