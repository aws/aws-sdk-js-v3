import { _ContainerInstance } from "./_ContainerInstance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterContainerInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    containerInstance: {
      shape: _ContainerInstance
    }
  }
};
