import { _TrustAnchorList } from "./_TrustAnchorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateNetworkProfileInput: _Structure_ = {
  type: "structure",
  required: ["NetworkProfileArn"],
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
    }
  }
};
