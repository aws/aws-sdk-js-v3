import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UiConfig: _Structure_ = {
  type: "structure",
  required: ["UiTemplateS3Uri"],
  members: {
    UiTemplateS3Uri: {
      shape: {
        type: "string"
      }
    }
  }
};
