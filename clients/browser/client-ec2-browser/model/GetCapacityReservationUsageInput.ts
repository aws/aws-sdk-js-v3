import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCapacityReservationUsageInput: _Structure_ = {
  type: "structure",
  required: ["CapacityReservationId"],
  members: {
    CapacityReservationId: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
