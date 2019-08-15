import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SmsConfigurationType: _Structure_ = {
  type: "structure",
  required: ["SnsCallerArn"],
  members: {
    SnsCallerArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ExternalId: {
      shape: {
        type: "string"
      }
    }
  }
};
