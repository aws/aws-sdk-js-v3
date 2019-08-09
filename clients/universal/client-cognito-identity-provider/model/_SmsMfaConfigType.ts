import { _SmsConfigurationType } from "./_SmsConfigurationType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SmsMfaConfigType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SmsAuthenticationMessage: {
      shape: {
        type: "string",
        min: 6
      }
    },
    SmsConfiguration: {
      shape: _SmsConfigurationType
    }
  }
};
