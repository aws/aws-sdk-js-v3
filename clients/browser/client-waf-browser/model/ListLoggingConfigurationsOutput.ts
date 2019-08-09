import { _LoggingConfigurations } from "./_LoggingConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLoggingConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoggingConfigurations: {
      shape: _LoggingConfigurations
    },
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
