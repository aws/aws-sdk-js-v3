import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGatewaysInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
