import { _GroupOwnerSetting } from "./_GroupOwnerSetting";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LocalVolumeResourceData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DestinationPath: {
      shape: {
        type: "string"
      }
    },
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
