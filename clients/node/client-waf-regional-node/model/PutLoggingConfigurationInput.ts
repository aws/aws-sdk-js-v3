import { _LoggingConfiguration } from "./_LoggingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLoggingConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["LoggingConfiguration"],
  members: {
    LoggingConfiguration: {
      shape: _LoggingConfiguration
    }
  }
};
