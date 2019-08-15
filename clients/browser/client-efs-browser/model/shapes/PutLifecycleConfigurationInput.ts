import { _LifecyclePolicies } from "./_LifecyclePolicies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLifecycleConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["FileSystemId", "LifecyclePolicies"],
  members: {
    FileSystemId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "FileSystemId"
    },
    LifecyclePolicies: {
      shape: _LifecyclePolicies
    }
  }
};
