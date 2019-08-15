import { _InstanceFleetModifyConfig } from "./_InstanceFleetModifyConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyInstanceFleetInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId", "InstanceFleet"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    InstanceFleet: {
      shape: _InstanceFleetModifyConfig
    }
  }
};
