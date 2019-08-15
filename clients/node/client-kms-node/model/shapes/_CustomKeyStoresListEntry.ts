import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomKeyStoresListEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomKeyStoreId: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    ConnectionState: {
      shape: {
        type: "string"
      }
    },
    ConnectionErrorCode: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
