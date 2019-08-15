import { _SmsMfaConfigType } from "./_SmsMfaConfigType";
import { _SoftwareTokenMfaConfigType } from "./_SoftwareTokenMfaConfigType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserPoolMfaConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
