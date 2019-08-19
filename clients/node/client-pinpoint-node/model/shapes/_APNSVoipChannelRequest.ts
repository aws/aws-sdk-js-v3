import { Structure as _Structure_ } from "@aws-sdk/types";

export const _APNSVoipChannelRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BundleId: {
      shape: {
        type: "string"
      }
    },
    Certificate: {
      shape: {
        type: "string"
      }
    },
    DefaultAuthenticationMethod: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    PrivateKey: {
      shape: {
        type: "string"
      }
    },
    TeamId: {
      shape: {
        type: "string"
      }
    },
    TokenKey: {
      shape: {
        type: "string"
      }
    },
    TokenKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
