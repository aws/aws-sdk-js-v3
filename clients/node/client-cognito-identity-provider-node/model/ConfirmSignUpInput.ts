import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { _UserContextDataType } from "./_UserContextDataType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfirmSignUpInput: _Structure_ = {
  type: "structure",
  required: ["ClientId", "Username", "ConfirmationCode"],
  members: {
    ClientId: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    SecretHash: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    ConfirmationCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ForceAliasCreation: {
      shape: {
        type: "boolean"
      }
    },
    AnalyticsMetadata: {
      shape: _AnalyticsMetadataType
    },
    UserContextData: {
      shape: _UserContextDataType
    }
  }
};
