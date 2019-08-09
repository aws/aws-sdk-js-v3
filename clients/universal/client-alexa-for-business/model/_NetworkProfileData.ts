import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkProfileData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkProfileArn: {
      shape: {
        type: "string"
      }
    },
    NetworkProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Ssid: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SecurityType: {
      shape: {
        type: "string"
      }
    },
    EapMethod: {
      shape: {
        type: "string"
      }
    },
    CertificateAuthorityArn: {
      shape: {
        type: "string"
      }
    }
  }
};
