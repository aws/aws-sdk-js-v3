import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCustomKeyStoreInput: _Structure_ = {
  type: "structure",
  required: [
    "CustomKeyStoreName",
    "CloudHsmClusterId",
    "TrustAnchorCertificate",
    "KeyStorePassword"
  ],
  members: {
    CustomKeyStoreName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CloudHsmClusterId: {
      shape: {
        type: "string",
        min: 19
      }
    },
    TrustAnchorCertificate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    KeyStorePassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
