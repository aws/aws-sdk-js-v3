import { _TagFilters } from "./_TagFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationSource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudFormationStackARN: {
      shape: {
        type: "string"
      }
    },
    TagFilters: {
      shape: _TagFilters
    }
  }
};
