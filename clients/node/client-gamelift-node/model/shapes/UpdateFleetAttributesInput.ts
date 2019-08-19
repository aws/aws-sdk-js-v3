import { _ResourceCreationLimitPolicy } from "./_ResourceCreationLimitPolicy";
import { _MetricGroupList } from "./_MetricGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFleetAttributesInput: _Structure_ = {
  type: "structure",
  required: ["FleetId"],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NewGameSessionProtectionPolicy: {
      shape: {
        type: "string"
      }
    },
    ResourceCreationLimitPolicy: {
      shape: _ResourceCreationLimitPolicy
    },
    MetricGroups: {
      shape: _MetricGroupList
    }
  }
};
