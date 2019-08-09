import { _Parameters } from "./_Parameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const EstimateTemplateCostInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TemplateBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TemplateURL: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Parameters: {
      shape: _Parameters
    }
  }
};
