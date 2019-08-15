import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EmailChannelRequest: _Structure_ = {
  type: "structure",
  required: ["FromAddress", "Identity"],
  members: {
    ConfigurationSet: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    FromAddress: {
      shape: {
        type: "string"
      }
    },
    Identity: {
      shape: {
        type: "string"
      }
    },
    RoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
