import { _SmsMfaConfigType } from "./_SmsMfaConfigType";
import { _SoftwareTokenMfaConfigType } from "./_SoftwareTokenMfaConfigType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetUserPoolMfaConfigInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SmsMfaConfiguration: {
      shape: _SmsMfaConfigType
    },
    SoftwareTokenMfaConfiguration: {
      shape: _SoftwareTokenMfaConfigType
    },
    MfaConfiguration: {
      shape: {
        type: "string"
      }
    }
  }
};
