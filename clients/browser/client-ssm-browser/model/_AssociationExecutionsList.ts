import { List as _List_ } from "@aws-sdk/types";
import { _AssociationExecution } from "./_AssociationExecution";

export const _AssociationExecutionsList: _List_ = {
  type: "list",
  member: {
    shape: _AssociationExecution
  }
};
