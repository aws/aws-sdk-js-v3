import { List as _List_ } from "@aws-sdk/types";
import { _Resource } from "./_Resource";

export const _Resources: _List_ = {
  type: "list",
  member: {
    shape: _Resource
  }
};
