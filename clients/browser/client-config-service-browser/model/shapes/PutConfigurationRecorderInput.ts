import { _ConfigurationRecorder } from "./_ConfigurationRecorder";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutConfigurationRecorderInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationRecorder"],
  members: {
    ConfigurationRecorder: {
      shape: _ConfigurationRecorder
    }
  }
};
