import { _KeyPairIds } from "./_KeyPairIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Signer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AwsAccountNumber: {
      shape: {
        type: "string"
      }
    },
    KeyPairIds: {
      shape: _KeyPairIds
    }
  }
};
