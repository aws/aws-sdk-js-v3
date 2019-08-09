import { _ApplicationVersionLifecycleConfig } from "./_ApplicationVersionLifecycleConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationResourceLifecycleConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceRole: {
      shape: {
        type: "string"
      }
    },
    VersionLifecycleConfig: {
      shape: _ApplicationVersionLifecycleConfig
    }
  }
};
