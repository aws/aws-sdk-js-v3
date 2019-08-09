import { Structure as _Structure_ } from "@aws-sdk/types";

export const CheckDNSAvailabilityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Available: {
      shape: {
        type: "boolean"
      }
    },
    FullyQualifiedCNAME: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
