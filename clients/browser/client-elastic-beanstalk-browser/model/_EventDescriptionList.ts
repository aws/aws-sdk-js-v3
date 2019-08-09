import { List as _List_ } from "@aws-sdk/types";
import { _EventDescription } from "./_EventDescription";

export const _EventDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _EventDescription
  }
};
