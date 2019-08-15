import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSecurityConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    SecurityConfiguration: {
      shape: {
        type: "string"
      }
    },
    CreationDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
