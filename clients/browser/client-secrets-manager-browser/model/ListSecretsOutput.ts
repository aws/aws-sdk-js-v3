import { _SecretListType } from "./_SecretListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSecretsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecretList: {
      shape: _SecretListType
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
