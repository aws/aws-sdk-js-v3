import { List as _List_ } from "@aws-sdk/types";
import { _SolutionStackDescription } from "./_SolutionStackDescription";

export const _AvailableSolutionStackDetailsList: _List_ = {
  type: "list",
  member: {
    shape: _SolutionStackDescription
  }
};
