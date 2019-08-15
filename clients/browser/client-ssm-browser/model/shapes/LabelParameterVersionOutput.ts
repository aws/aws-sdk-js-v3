import { _ParameterLabelList } from "./_ParameterLabelList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const LabelParameterVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InvalidLabels: {
      shape: _ParameterLabelList
    }
  }
};
