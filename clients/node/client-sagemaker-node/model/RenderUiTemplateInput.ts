import { _UiTemplate } from "./_UiTemplate";
import { _RenderableTask } from "./_RenderableTask";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RenderUiTemplateInput: _Structure_ = {
  type: "structure",
  required: ["UiTemplate", "Task", "RoleArn"],
  members: {
    UiTemplate: {
      shape: _UiTemplate
    },
    Task: {
      shape: _RenderableTask
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
