import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartImageBuilderInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AppstreamAgentVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
