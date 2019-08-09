import { _PushSync } from "./_PushSync";
import { _CognitoStreams } from "./_CognitoStreams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetIdentityPoolConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["IdentityPoolId"],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityPoolId"
    },
    PushSync: {
      shape: _PushSync
    },
    CognitoStreams: {
      shape: _CognitoStreams
    }
  }
};
