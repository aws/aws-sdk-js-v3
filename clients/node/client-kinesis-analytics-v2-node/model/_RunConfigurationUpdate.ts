import { _ApplicationRestoreConfiguration } from "./_ApplicationRestoreConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RunConfigurationUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationRestoreConfiguration: {
      shape: _ApplicationRestoreConfiguration
    }
  }
};
