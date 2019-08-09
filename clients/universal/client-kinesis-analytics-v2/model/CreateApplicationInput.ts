import { _ApplicationConfiguration } from "./_ApplicationConfiguration";
import { _CloudWatchLoggingOptions } from "./_CloudWatchLoggingOptions";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApplicationInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "RuntimeEnvironment", "ServiceExecutionRole"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ApplicationDescription: {
      shape: {
        type: "string"
      }
    },
    RuntimeEnvironment: {
      shape: {
        type: "string"
      }
    },
    ServiceExecutionRole: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ApplicationConfiguration: {
      shape: _ApplicationConfiguration
    },
    CloudWatchLoggingOptions: {
      shape: _CloudWatchLoggingOptions
    },
    Tags: {
      shape: _Tags
    }
  }
};
