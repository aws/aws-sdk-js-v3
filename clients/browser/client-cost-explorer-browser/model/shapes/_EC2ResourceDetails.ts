import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EC2ResourceDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HourlyOnDemandRate: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    Platform: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    Sku: {
      shape: {
        type: "string"
      }
    },
    Memory: {
      shape: {
        type: "string"
      }
    },
    NetworkPerformance: {
      shape: {
        type: "string"
      }
    },
    Storage: {
      shape: {
        type: "string"
      }
    },
    Vcpu: {
      shape: {
        type: "string"
      }
    }
  }
};
