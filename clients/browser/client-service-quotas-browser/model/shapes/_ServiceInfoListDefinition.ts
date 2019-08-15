import { List as _List_ } from "@aws-sdk/types";
import { _ServiceInfo } from "./_ServiceInfo";

export const _ServiceInfoListDefinition: _List_ = {
  type: "list",
  member: {
    shape: _ServiceInfo
  }
};
