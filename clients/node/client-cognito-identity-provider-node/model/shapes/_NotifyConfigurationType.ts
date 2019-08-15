import { _NotifyEmailType } from "./_NotifyEmailType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotifyConfigurationType: _Structure_ = {
  type: "structure",
  required: ["SourceArn"],
  members: {
    From: {
      shape: {
        type: "string"
      }
    },
    ReplyTo: {
      shape: {
        type: "string"
      }
    },
    SourceArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    BlockEmail: {
      shape: _NotifyEmailType
    },
    NoActionEmail: {
      shape: _NotifyEmailType
    },
    MfaEmail: {
      shape: _NotifyEmailType
    }
  }
};
