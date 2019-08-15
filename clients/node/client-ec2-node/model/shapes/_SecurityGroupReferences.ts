import { List as _List_ } from "@aws-sdk/types";
import { _SecurityGroupReference } from "./_SecurityGroupReference";

export const _SecurityGroupReferences: _List_ = {
  type: "list",
  member: {
    shape: _SecurityGroupReference,
    locationName: "item"
  }
};
