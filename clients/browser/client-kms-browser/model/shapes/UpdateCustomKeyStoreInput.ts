import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCustomKeyStoreInput: _Structure_ = {
  type: "structure",
  required: ["CustomKeyStoreId"],
  members: {
    CustomKeyStoreId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NewCustomKeyStoreName: {
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
    },
    CloudHsmClusterId: {
      shape: {
        type: "string",
        min: 19
      }
    }
  }
};
