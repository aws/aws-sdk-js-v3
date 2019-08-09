import { _TargetCapacitySpecificationRequest } from "./_TargetCapacitySpecificationRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyFleetInput: _Structure_ = {
  type: "structure",
  required: ["FleetId", "TargetCapacitySpecification"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ExcessCapacityTerminationPolicy: {
      shape: {
        type: "string"
      }
    },
    FleetId: {
      shape: {
        type: "string"
      }
    },
    TargetCapacitySpecification: {
      shape: _TargetCapacitySpecificationRequest
    }
  }
};
