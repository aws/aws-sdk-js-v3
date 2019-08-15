import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelationalDatabaseEndpoint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    port: {
      shape: {
        type: "integer"
      }
    },
    address: {
      shape: {
        type: "string"
      }
    }
  }
};
