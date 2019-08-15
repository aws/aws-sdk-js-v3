import { _StageList } from "./_StageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TemplateBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StagesAvailable: {
      shape: _StageList
    }
  }
};
