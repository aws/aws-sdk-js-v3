import { List as _List_ } from "@aws-sdk/types";
import { _TargetTrackingConfiguration } from "./_TargetTrackingConfiguration";

export const _TargetTrackingConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _TargetTrackingConfiguration
  }
};
