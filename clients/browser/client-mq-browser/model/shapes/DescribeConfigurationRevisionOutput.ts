import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationRevisionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationId: {
      shape: {
        type: "string"
      },
      locationName: "configurationId"
    },
    Created: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "created"
    },
    Data: {
      shape: {
        type: "string"
      },
      locationName: "data"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    }
  }
};
