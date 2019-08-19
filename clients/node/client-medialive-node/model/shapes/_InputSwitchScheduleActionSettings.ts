import { _InputClippingSettings } from "./_InputClippingSettings";
import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputSwitchScheduleActionSettings: _Structure_ = {
  type: "structure",
  required: ["InputAttachmentNameReference"],
  members: {
    InputAttachmentNameReference: {
      shape: {
        type: "string"
      },
      locationName: "inputAttachmentNameReference"
    },
    InputClippingSettings: {
      shape: _InputClippingSettings,
      locationName: "inputClippingSettings"
    },
    UrlPath: {
      shape: ___listOf__string,
      locationName: "urlPath"
    }
  }
};
