import { _Backends } from "./_Backends";
import { _Listeners } from "./_Listeners";
import { _Logging } from "./_Logging";
import { _ServiceDiscovery } from "./_ServiceDiscovery";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualNodeSpec: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    backends: {
      shape: _Backends
    },
    listeners: {
      shape: _Listeners
    },
    logging: {
      shape: _Logging
    },
    serviceDiscovery: {
      shape: _ServiceDiscovery
    }
  }
};
