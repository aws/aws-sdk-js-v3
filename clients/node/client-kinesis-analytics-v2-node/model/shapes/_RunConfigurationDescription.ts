import { _ApplicationRestoreConfiguration } from "./_ApplicationRestoreConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RunConfigurationDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationRestoreConfigurationDescription: {
      shape: _ApplicationRestoreConfiguration
    }
  }
};
