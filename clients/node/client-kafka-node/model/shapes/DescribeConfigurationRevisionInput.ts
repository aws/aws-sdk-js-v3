import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationRevisionInput: _Structure_ = {
  type: "structure",
  required: ["Revision", "Arn"],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "arn"
    },
    Revision: {
      shape: {
        type: "integer"
      },
      location: "uri",
      locationName: "revision"
    }
  }
};
