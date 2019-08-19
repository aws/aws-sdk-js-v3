import { _SystemTemplateFilterValues } from "./_SystemTemplateFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SystemTemplateFilter: _Structure_ = {
  type: "structure",
  required: ["name", "value"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: _SystemTemplateFilterValues
    }
  }
};
