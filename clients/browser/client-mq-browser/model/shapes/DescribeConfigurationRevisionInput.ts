import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationRevisionInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationRevision", "ConfigurationId"],
  members: {
    ConfigurationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "configuration-id"
    },
    ConfigurationRevision: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "configuration-revision"
    }
  }
};
