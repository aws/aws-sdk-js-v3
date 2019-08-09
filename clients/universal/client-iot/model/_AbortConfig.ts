import { _AbortCriteriaList } from "./_AbortCriteriaList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AbortConfig: _Structure_ = {
  type: "structure",
  required: ["criteriaList"],
  members: {
    criteriaList: {
      shape: _AbortCriteriaList
    }
  }
};
