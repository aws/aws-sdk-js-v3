import { List as _List_ } from "@aws-sdk/types";
import { _PolicyRole } from "./_PolicyRole";

export const _PolicyRoleListType: _List_ = {
  type: "list",
  member: {
    shape: _PolicyRole
  }
};
