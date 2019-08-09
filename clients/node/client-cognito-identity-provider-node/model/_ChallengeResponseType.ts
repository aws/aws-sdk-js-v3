import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChallengeResponseType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChallengeName: {
      shape: {
        type: "string"
      }
    },
    ChallengeResponse: {
      shape: {
        type: "string"
      }
    }
  }
};
