import { _AuthParametersType } from "./_AuthParametersType";
import { _ClientMetadataType } from "./_ClientMetadataType";
import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { _ContextDataType } from "./_ContextDataType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminInitiateAuthInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "ClientId", "AuthFlow"],
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
    AuthFlow: {
      shape: {
        type: "string"
      }
    },
    AuthParameters: {
      shape: _AuthParametersType
    },
    ClientMetadata: {
      shape: _ClientMetadataType
    },
    AnalyticsMetadata: {
      shape: _AnalyticsMetadataType
    },
    ContextData: {
      shape: _ContextDataType
    }
  }
};
