import { _PolicyVersionIdentifier } from "./_PolicyVersionIdentifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceIdentifier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deviceCertificateId: {
      shape: {
        type: "string",
        min: 64
      }
    },
    caCertificateId: {
      shape: {
        type: "string",
        min: 64
      }
    },
    cognitoIdentityPoolId: {
      shape: {
        type: "string"
      }
    },
    clientId: {
      shape: {
        type: "string"
      }
    },
    policyVersionIdentifier: {
      shape: _PolicyVersionIdentifier
    },
    account: {
      shape: {
        type: "string",
        min: 12
      }
    }
  }
};
