import { List as _List_ } from "@aws-sdk/types";
import { _ServiceActionAssociation } from "./_ServiceActionAssociation";

export const _ServiceActionAssociations: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ServiceActionAssociation
  }
};
