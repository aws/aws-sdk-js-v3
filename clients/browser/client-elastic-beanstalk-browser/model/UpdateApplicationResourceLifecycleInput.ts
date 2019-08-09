import { _ApplicationResourceLifecycleConfig } from "./_ApplicationResourceLifecycleConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationResourceLifecycleInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "ResourceLifecycleConfig"],
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
