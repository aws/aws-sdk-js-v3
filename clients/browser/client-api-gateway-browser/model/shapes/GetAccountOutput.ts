import { _ThrottleSettings } from "./_ThrottleSettings";
import { _ListOfString } from "./_ListOfString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAccountOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cloudwatchRoleArn: {
      shape: {
        type: "string"
      }
    },
    throttleSettings: {
      shape: _ThrottleSettings
    },
    features: {
      shape: _ListOfString
    },
    apiKeyVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
