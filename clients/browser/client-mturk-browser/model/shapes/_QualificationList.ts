import { List as _List_ } from "@aws-sdk/types";
import { _Qualification } from "./_Qualification";

export const _QualificationList: _List_ = {
  type: "list",
  member: {
    shape: _Qualification
  }
};
