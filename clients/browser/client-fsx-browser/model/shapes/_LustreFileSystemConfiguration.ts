import { _DataRepositoryConfiguration } from "./_DataRepositoryConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LustreFileSystemConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WeeklyMaintenanceStartTime: {
      shape: {
        type: "string",
        min: 7
      }
    },
    DataRepositoryConfiguration: {
      shape: _DataRepositoryConfiguration
    }
  }
};
