import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EC2InstanceDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Family: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    Platform: {
      shape: {
        type: "string"
      }
    },
    Tenancy: {
      shape: {
        type: "string"
      }
    },
    CurrentGeneration: {
      shape: {
        type: "boolean"
      }
    },
    SizeFlexEligible: {
      shape: {
        type: "boolean"
      }
    }
  }
};
