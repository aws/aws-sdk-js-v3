import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerDependency: _Structure_ = {
  type: "structure",
  required: ["containerName", "condition"],
  members: {
    containerName: {
      shape: {
        type: "string"
      }
    },
    condition: {
      shape: {
        type: "string"
      }
    }
  }
};
