import { List as _List_ } from "@aws-sdk/types";
import { _AuthorizationData } from "./_AuthorizationData";

export const _AuthorizationDataList: _List_ = {
  type: "list",
  member: {
    shape: _AuthorizationData
  }
};
