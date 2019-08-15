import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateContainerAgentInput: _Structure_ = {
  type: "structure",
  required: ["containerInstance"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    containerInstance: {
      shape: {
        type: "string"
      }
    }
  }
};
