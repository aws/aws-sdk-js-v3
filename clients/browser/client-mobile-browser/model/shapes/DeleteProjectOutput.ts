import { _Resources } from "./_Resources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteProjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deletedResources: {
      shape: _Resources
    },
    orphanedResources: {
      shape: _Resources
    }
  }
};
