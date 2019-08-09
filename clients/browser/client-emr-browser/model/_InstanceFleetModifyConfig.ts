import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceFleetModifyConfig: _Structure_ = {
  type: "structure",
  required: ["InstanceFleetId"],
  members: {
    InstanceFleetId: {
      shape: {
        type: "string"
      }
    },
    TargetOnDemandCapacity: {
      shape: {
        type: "integer"
      }
    },
    TargetSpotCapacity: {
      shape: {
        type: "integer"
      }
    }
  }
};
