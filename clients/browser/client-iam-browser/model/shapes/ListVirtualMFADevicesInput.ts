import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVirtualMFADevicesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssignmentStatus: {
      shape: {
        type: "string"
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
