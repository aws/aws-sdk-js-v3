import { _TagListType } from "./_TagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSecretInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
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
    Description: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    SecretBinary: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    SecretString: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Tags: {
      shape: _TagListType
    }
  }
};
