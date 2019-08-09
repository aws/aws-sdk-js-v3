import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TemporaryCredential: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Username: {
      shape: {
        type: "string"
      }
    },
    Password: {
      shape: {
        type: "string"
      }
    },
    ValidForInMinutes: {
      shape: {
        type: "integer"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    }
  }
};
