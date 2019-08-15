import { _UserContextDataType } from "./_UserContextDataType";
import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ForgotPasswordInput: _Structure_ = {
  type: "structure",
  required: ["ClientId", "Username"],
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
    UserContextData: {
      shape: _UserContextDataType
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    AnalyticsMetadata: {
      shape: _AnalyticsMetadataType
    }
  }
};
