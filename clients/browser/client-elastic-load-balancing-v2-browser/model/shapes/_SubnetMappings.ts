import { List as _List_ } from "@aws-sdk/types";
import { _SubnetMapping } from "./_SubnetMapping";

export const _SubnetMappings: _List_ = {
  type: "list",
  member: {
    shape: _SubnetMapping
  }
};
