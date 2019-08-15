import { _EbsBlockDeviceConfigList } from "./_EbsBlockDeviceConfigList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EbsConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EbsBlockDeviceConfigs: {
      shape: _EbsBlockDeviceConfigList
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      }
    }
  }
};
