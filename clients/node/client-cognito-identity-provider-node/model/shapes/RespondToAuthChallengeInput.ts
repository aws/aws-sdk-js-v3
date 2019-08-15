import { _ChallengeResponsesType } from "./_ChallengeResponsesType";
import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { _UserContextDataType } from "./_UserContextDataType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RespondToAuthChallengeInput: _Structure_ = {
  type: "structure",
  required: ["ClientId", "ChallengeName"],
  members: {
    ClientId: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
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
    ChallengeResponses: {
      shape: _ChallengeResponsesType
    },
    AnalyticsMetadata: {
      shape: _AnalyticsMetadataType
    },
    UserContextData: {
      shape: _UserContextDataType
    }
  }
};
