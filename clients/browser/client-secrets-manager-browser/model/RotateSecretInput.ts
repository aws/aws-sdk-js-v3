import { _RotationRulesType } from "./_RotationRulesType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RotateSecretInput: _Structure_ = {
  type: "structure",
  required: ["SecretId"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 32
      }
    },
    RotationLambdaARN: {
      shape: {
        type: "string"
      }
    },
    RotationRules: {
      shape: _RotationRulesType
    }
  }
};
