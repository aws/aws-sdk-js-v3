import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDomainsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    MaxItems: {
      shape: {
        type: "integer"
      }
    }
  }
};
