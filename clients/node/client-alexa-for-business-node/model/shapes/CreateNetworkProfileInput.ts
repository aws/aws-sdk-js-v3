import { _TrustAnchorList } from "./_TrustAnchorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNetworkProfileInput: _Structure_ = {
  type: "structure",
  required: [
    "NetworkProfileName",
    "Ssid",
    "SecurityType",
    "ClientRequestToken"
  ],
  members: {
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
    CurrentPassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 5
      }
    },
    NextPassword: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    CertificateAuthorityArn: {
      shape: {
        type: "string"
      }
    },
    TrustAnchors: {
      shape: _TrustAnchorList
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 10
      }
    }
  }
};
