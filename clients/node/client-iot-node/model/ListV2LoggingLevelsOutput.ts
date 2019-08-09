import { _LogTargetConfigurations } from "./_LogTargetConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListV2LoggingLevelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logTargetConfigurations: {
      shape: _LogTargetConfigurations
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
