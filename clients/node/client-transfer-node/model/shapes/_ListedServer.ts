import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ListedServer: _Structure_ = {
  type: "structure",
  required: ["Arn"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    IdentityProviderType: {
      shape: {
        type: "string"
      }
    },
    EndpointType: {
      shape: {
        type: "string"
      }
    },
    LoggingRole: {
      shape: {
        type: "string"
      }
    },
    ServerId: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    UserCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
