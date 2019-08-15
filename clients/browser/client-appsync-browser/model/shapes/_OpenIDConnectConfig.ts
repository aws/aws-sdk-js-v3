import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OpenIDConnectConfig: _Structure_ = {
  type: "structure",
  required: ["issuer"],
  members: {
    issuer: {
      shape: {
        type: "string"
      }
    },
    clientId: {
      shape: {
        type: "string"
      }
    },
    iatTTL: {
      shape: {
        type: "integer"
      }
    },
    authTTL: {
      shape: {
        type: "integer"
      }
    }
  }
};
