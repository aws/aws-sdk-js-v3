import { _RunConfiguration } from "./_RunConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartApplicationInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "RunConfiguration"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RunConfiguration: {
      shape: _RunConfiguration
    }
  }
};
