import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestartAppServerInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnvironmentId: {
      shape: {
        type: "string"
      }
    },
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
