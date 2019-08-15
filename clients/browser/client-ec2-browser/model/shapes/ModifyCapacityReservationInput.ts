import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyCapacityReservationInput: _Structure_ = {
  type: "structure",
  required: ["CapacityReservationId"],
  members: {
    CapacityReservationId: {
      shape: {
        type: "string"
      }
    },
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    EndDate: {
      shape: {
        type: "timestamp"
      }
    },
    EndDateType: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
