import { _ApplicationResourceLifecycleConfig } from "./_ApplicationResourceLifecycleConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationResourceLifecycleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceLifecycleConfig: {
      shape: _ApplicationResourceLifecycleConfig
    }
  }
};
