import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstanceGroupsInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
