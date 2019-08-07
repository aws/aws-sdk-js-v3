import { _ADMMessage } from "./_ADMMessage";
import { _APNSMessage } from "./_APNSMessage";
import { _BaiduMessage } from "./_BaiduMessage";
import { _DefaultMessage } from "./_DefaultMessage";
import { _DefaultPushNotificationMessage } from "./_DefaultPushNotificationMessage";
import { _EmailMessage } from "./_EmailMessage";
import { _GCMMessage } from "./_GCMMessage";
import { _SMSMessage } from "./_SMSMessage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectMessageConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ADMMessage: {
      shape: _ADMMessage
    },
    APNSMessage: {
      shape: _APNSMessage
    },
    BaiduMessage: {
      shape: _BaiduMessage
    },
    DefaultMessage: {
      shape: _DefaultMessage
    },
    DefaultPushNotificationMessage: {
      shape: _DefaultPushNotificationMessage
    },
    EmailMessage: {
      shape: _EmailMessage
    },
    GCMMessage: {
      shape: _GCMMessage
    },
    SMSMessage: {
      shape: _SMSMessage
    }
  }
};
