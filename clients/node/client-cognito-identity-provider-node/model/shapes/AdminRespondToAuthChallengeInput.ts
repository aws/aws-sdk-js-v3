import { _ChallengeResponsesType } from "./_ChallengeResponsesType";
import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { _ContextDataType } from "./_ContextDataType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminRespondToAuthChallengeInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "ClientId", "ChallengeName"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    ChallengeResponses: {
      shape: _ChallengeResponsesType
    },
    Session: {
      shape: {
        type: "string",
        min: 20
      }
    },
    AnalyticsMetadata: {
      shape: _AnalyticsMetadataType
    },
    ContextData: {
      shape: _ContextDataType
    }
  }
};
