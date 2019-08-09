import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRolesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PathPrefix: {
      shape: {
        type: "string",
        min: 1
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
