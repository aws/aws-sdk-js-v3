import { List as _List_ } from "@aws-sdk/types";
import { _EnvironmentInfoDescription } from "./_EnvironmentInfoDescription";

export const _EnvironmentInfoDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _EnvironmentInfoDescription
  }
};
