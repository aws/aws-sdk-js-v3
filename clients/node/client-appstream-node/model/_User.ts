import { Structure as _Structure_ } from "@aws-sdk/types";

export const _User: _Structure_ = {
  type: "structure",
  required: ["AuthenticationType"],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    UserName: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    Status: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FirstName: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    LastName: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    AuthenticationType: {
      shape: {
        type: "string"
      }
    }
  }
};
