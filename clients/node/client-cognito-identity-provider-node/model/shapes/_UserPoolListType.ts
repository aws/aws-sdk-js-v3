import { List as _List_ } from "@aws-sdk/types";
import { _UserPoolDescriptionType } from "./_UserPoolDescriptionType";

export const _UserPoolListType: _List_ = {
  type: "list",
  member: {
    shape: _UserPoolDescriptionType
  }
};
