import { List as _List_ } from "@aws-sdk/types";
import { _PortMapping } from "./_PortMapping";

export const _PortMappingList: _List_ = {
  type: "list",
  member: {
    shape: _PortMapping
  }
};
