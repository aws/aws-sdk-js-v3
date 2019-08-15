import { _InstanceFleetConfig } from "./_InstanceFleetConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddInstanceFleetInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId", "InstanceFleet"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    InstanceFleet: {
      shape: _InstanceFleetConfig
    }
  }
};
