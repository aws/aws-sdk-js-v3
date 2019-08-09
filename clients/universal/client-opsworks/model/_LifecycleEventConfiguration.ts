import { _ShutdownEventConfiguration } from "./_ShutdownEventConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LifecycleEventConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Shutdown: {
      shape: _ShutdownEventConfiguration
    }
  }
};
