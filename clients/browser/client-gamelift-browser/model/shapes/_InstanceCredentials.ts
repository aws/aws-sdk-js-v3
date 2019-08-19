import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceCredentials: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Secret: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  sensitive: true
};
