import { _RetentionConfiguration } from "./_RetentionConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRetentionConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RetentionConfiguration: {
      shape: _RetentionConfiguration
    }
  }
};
