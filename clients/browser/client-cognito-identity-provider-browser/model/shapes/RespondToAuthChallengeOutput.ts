import { _ChallengeParametersType } from "./_ChallengeParametersType";
import { _AuthenticationResultType } from "./_AuthenticationResultType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RespondToAuthChallengeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChallengeName: {
      shape: {
        type: "string"
      }
    },
    Session: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ChallengeParameters: {
      shape: _ChallengeParametersType
    },
    AuthenticationResult: {
      shape: _AuthenticationResultType
    }
  }
};
