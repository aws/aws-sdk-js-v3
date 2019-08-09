import { Structure as _Structure_ } from "@aws-sdk/types";

export const InitializeClusterInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId", "SignedCert", "TrustAnchor"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    SignedCert: {
      shape: {
        type: "string"
      }
    },
    TrustAnchor: {
      shape: {
        type: "string"
      }
    }
  }
};
