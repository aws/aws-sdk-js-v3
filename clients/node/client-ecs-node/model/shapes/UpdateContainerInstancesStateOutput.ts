import { _ContainerInstances } from "./_ContainerInstances";
import { _Failures } from "./_Failures";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateContainerInstancesStateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    containerInstances: {
      shape: _ContainerInstances
    },
    failures: {
      shape: _Failures
    }
  }
};
