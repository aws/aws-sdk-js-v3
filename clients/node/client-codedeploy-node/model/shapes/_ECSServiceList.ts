import { List as _List_ } from "@aws-sdk/types";
import { _ECSService } from "./_ECSService";

export const _ECSServiceList: _List_ = {
  type: "list",
  member: {
    shape: _ECSService
  }
};
