import { _KernelCapabilities } from "./_KernelCapabilities";
import { _DevicesList } from "./_DevicesList";
import { _TmpfsList } from "./_TmpfsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LinuxParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    capabilities: {
      shape: _KernelCapabilities
    },
    devices: {
      shape: _DevicesList
    },
    initProcessEnabled: {
      shape: {
        type: "boolean"
      }
    },
    sharedMemorySize: {
      shape: {
        type: "integer"
      }
    },
    tmpfs: {
      shape: _TmpfsList
    }
  }
};
