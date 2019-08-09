import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { _UserContextDataType } from "./_UserContextDataType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfirmForgotPasswordInput: _Structure_ = {
  type: "structure",
  required: ["ClientId", "Username", "ConfirmationCode", "Password"],
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
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
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
