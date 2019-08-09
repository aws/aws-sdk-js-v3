import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ESInstanceDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceClass: {
      shape: {
        type: "string"
      }
    },
    InstanceSize: {
      shape: {
        type: "string"
      }
    },
    Region: {
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
