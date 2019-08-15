import { _ApplicationConfigurationUpdate } from "./_ApplicationConfigurationUpdate";
import { _RunConfigurationUpdate } from "./_RunConfigurationUpdate";
import { _CloudWatchLoggingOptionUpdates } from "./_CloudWatchLoggingOptionUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "CurrentApplicationVersionId"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentApplicationVersionId: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ApplicationConfigurationUpdate: {
      shape: _ApplicationConfigurationUpdate
    },
    ServiceExecutionRoleUpdate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RunConfigurationUpdate: {
      shape: _RunConfigurationUpdate
    },
    CloudWatchLoggingOptionUpdates: {
      shape: _CloudWatchLoggingOptionUpdates
    }
  }
};
