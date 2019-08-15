import { _AuthParametersType } from "./_AuthParametersType";
import { _ClientMetadataType } from "./_ClientMetadataType";
import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { _UserContextDataType } from "./_UserContextDataType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const InitiateAuthInput: _Structure_ = {
  type: "structure",
  required: ["AuthFlow", "ClientId"],
  members: {
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
    ClientId: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
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
