import { List as _List_ } from "@aws-sdk/types";
import { _Relationship } from "./_Relationship";

export const _RelationshipList: _List_ = {
  type: "list",
  member: {
    shape: _Relationship
  }
};
