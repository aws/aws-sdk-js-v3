import { _PushSync } from "./_PushSync";
import { _CognitoStreams } from "./_CognitoStreams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetIdentityPoolConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PushSync: {
      shape: _PushSync
    },
    CognitoStreams: {
      shape: _CognitoStreams
    }
  }
};
