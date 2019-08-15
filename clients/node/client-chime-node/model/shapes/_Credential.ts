import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Credential: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Username: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
