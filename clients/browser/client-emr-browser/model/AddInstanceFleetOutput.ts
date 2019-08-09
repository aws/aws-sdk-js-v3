import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddInstanceFleetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    InstanceFleetId: {
      shape: {
        type: "string"
      }
    }
  }
};
