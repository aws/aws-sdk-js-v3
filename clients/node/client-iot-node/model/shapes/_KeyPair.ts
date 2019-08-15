import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KeyPair: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PublicKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PrivateKey: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
