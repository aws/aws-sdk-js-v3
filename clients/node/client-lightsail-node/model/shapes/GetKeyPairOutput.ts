import { _KeyPair } from "./_KeyPair";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetKeyPairOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    keyPair: {
      shape: _KeyPair
    }
  }
};
