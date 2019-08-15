import { List as _List_ } from "@aws-sdk/types";
import { _ApplicationDescription } from "./_ApplicationDescription";

export const _ApplicationDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _ApplicationDescription
  }
};
