import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationId"],
  members: {
    ConfigurationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "configuration-id"
    }
  }
};
