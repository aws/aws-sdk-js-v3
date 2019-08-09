import { _GroupOwnerSetting } from "./_GroupOwnerSetting";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LocalDeviceResourceData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupOwnerSetting: {
      shape: _GroupOwnerSetting
    },
    SourcePath: {
      shape: {
        type: "string"
      }
    }
  }
};
