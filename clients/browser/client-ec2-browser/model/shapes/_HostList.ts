import { List as _List_ } from "@aws-sdk/types";
import { _Host } from "./_Host";

export const _HostList: _List_ = {
  type: "list",
  member: {
    shape: _Host,
    locationName: "item"
  }
};
