import { _IosPaths } from "./_IosPaths";
import { _AndroidPaths } from "./_AndroidPaths";
import { _DeviceHostPaths } from "./_DeviceHostPaths";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomerArtifactPaths: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    iosPaths: {
      shape: _IosPaths
    },
    androidPaths: {
      shape: _AndroidPaths
    },
    deviceHostPaths: {
      shape: _DeviceHostPaths
    }
  }
};
