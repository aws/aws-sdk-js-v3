import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationRevisionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    CreationTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "creationTime"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Revision: {
      shape: {
        type: "integer"
      },
      locationName: "revision"
    },
    ServerProperties: {
      shape: {
        type: "blob"
      },
      locationName: "serverProperties"
    }
  }
};
