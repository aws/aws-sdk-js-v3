import { List as _List_ } from "@aws-sdk/types";
import { _ResourceRequirement } from "./_ResourceRequirement";

export const _ResourceRequirements: _List_ = {
  type: "list",
  member: {
    shape: _ResourceRequirement
  }
};
