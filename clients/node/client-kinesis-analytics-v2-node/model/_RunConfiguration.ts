import { _SqlRunConfigurations } from "./_SqlRunConfigurations";
import { _ApplicationRestoreConfiguration } from "./_ApplicationRestoreConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RunConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SqlRunConfigurations: {
      shape: _SqlRunConfigurations
    },
    ApplicationRestoreConfiguration: {
      shape: _ApplicationRestoreConfiguration
    }
  }
};
