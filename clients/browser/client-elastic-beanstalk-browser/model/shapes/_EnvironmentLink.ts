import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentLink: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LinkName: {
      shape: {
        type: "string"
      }
    },
    EnvironmentName: {
      shape: {
        type: "string"
      }
    }
  }
};
