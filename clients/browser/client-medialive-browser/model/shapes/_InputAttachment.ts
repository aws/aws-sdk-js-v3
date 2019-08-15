import { _InputSettings } from "./_InputSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputAttachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputAttachmentName: {
      shape: {
        type: "string"
      },
      locationName: "inputAttachmentName"
    },
    InputId: {
      shape: {
        type: "string"
      },
      locationName: "inputId"
    },
    InputSettings: {
      shape: _InputSettings,
      locationName: "inputSettings"
    }
  }
};
