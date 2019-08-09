import { _ParameterLabelList } from "./_ParameterLabelList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const LabelParameterVersionInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Labels"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ParameterVersion: {
      shape: {
        type: "integer"
      }
    },
    Labels: {
      shape: _ParameterLabelList
    }
  }
};
