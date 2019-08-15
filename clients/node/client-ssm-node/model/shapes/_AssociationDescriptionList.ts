import { List as _List_ } from "@aws-sdk/types";
import { _AssociationDescription } from "./_AssociationDescription";

export const _AssociationDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _AssociationDescription
  }
};
