import { _AttributeListType } from "./_AttributeListType";
import { _AnalyticsMetadataType } from "./_AnalyticsMetadataType";
import { _UserContextDataType } from "./_UserContextDataType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SignUpInput: _Structure_ = {
  type: "structure",
  required: ["ClientId", "Username", "Password"],
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
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    },
    UserAttributes: {
      shape: _AttributeListType
    },
    ValidationData: {
      shape: _AttributeListType
    },
    AnalyticsMetadata: {
      shape: _AnalyticsMetadataType
    },
    UserContextData: {
      shape: _UserContextDataType
    }
  }
};
