import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDevicesInput: _Structure_ = {
  type: "structure",
  required: ["AccessToken"],
  members: {
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    PaginationToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
