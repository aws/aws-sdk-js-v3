import { _KeyPair } from "./_KeyPair";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateKeysAndCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificateArn: {
      shape: {
        type: "string"
      }
    },
    certificateId: {
      shape: {
        type: "string",
        min: 64
      }
    },
    certificatePem: {
      shape: {
        type: "string",
        min: 1
      }
    },
    keyPair: {
      shape: _KeyPair
    }
  }
};
