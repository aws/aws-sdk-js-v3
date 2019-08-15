import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConfigurationSetReputationMetricsEnabledInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSetName", "Enabled"],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
