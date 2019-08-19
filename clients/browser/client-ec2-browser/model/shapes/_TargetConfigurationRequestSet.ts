import { List as _List_ } from "@aws-sdk/types";
import { _TargetConfigurationRequest } from "./_TargetConfigurationRequest";

export const _TargetConfigurationRequestSet: _List_ = {
  type: "list",
  member: {
    shape: _TargetConfigurationRequest,
    locationName: "TargetConfigurationRequest"
  }
};
