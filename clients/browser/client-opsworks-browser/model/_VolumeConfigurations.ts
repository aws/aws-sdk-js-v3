import { List as _List_ } from "@aws-sdk/types";
import { _VolumeConfiguration } from "./_VolumeConfiguration";

export const _VolumeConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _VolumeConfiguration
  }
};
