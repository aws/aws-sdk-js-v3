import { _AwsIamConfig } from "./_AwsIamConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthorizationConfig: _Structure_ = {
  type: "structure",
  required: ["authorizationType"],
  members: {
    authorizationType: {
      shape: {
        type: "string"
      }
    },
    awsIamConfig: {
      shape: _AwsIamConfig
    }
  }
};
