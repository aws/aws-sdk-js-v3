import { List as _List_ } from "@aws-sdk/types";
import { _InstanceInformation } from "./_InstanceInformation";

export const _InstanceInformationList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceInformation
  }
};
