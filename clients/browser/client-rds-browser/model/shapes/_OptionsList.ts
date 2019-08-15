import { List as _List_ } from "@aws-sdk/types";
import { _Option } from "./_Option";

export const _OptionsList: _List_ = {
  type: "list",
  member: {
    shape: _Option,
    locationName: "Option"
  }
};
