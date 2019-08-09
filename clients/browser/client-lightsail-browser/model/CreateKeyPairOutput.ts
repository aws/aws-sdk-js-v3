import { _KeyPair } from "./_KeyPair";
import { _Operation } from "./_Operation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateKeyPairOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    keyPair: {
      shape: _KeyPair
    },
    publicKeyBase64: {
      shape: {
        type: "string"
      }
    },
    privateKeyBase64: {
      shape: {
        type: "string"
      }
    },
    operation: {
      shape: _Operation
    }
  }
};
