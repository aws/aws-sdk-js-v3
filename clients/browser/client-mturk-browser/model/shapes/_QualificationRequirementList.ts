import { List as _List_ } from "@aws-sdk/types";
import { _QualificationRequirement } from "./_QualificationRequirement";

export const _QualificationRequirementList: _List_ = {
  type: "list",
  member: {
    shape: _QualificationRequirement
  }
};
