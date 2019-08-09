import { _FlowTemplateFilterValues } from "./_FlowTemplateFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FlowTemplateFilter: _Structure_ = {
  type: "structure",
  required: ["name", "value"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: _FlowTemplateFilterValues
    }
  }
};
