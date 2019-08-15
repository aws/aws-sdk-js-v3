import { List as _List_ } from "@aws-sdk/types";
import { _InstanceFleetConfig } from "./_InstanceFleetConfig";

export const _InstanceFleetConfigList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceFleetConfig
  }
};
