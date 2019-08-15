import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Source: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Url: {
      shape: {
        type: "string"
      }
    },
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
    SshKey: {
      shape: {
        type: "string"
      }
    },
    Revision: {
      shape: {
        type: "string"
      }
    }
  }
};
