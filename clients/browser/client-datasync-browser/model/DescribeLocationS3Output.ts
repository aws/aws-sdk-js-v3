import { _S3Config } from "./_S3Config";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLocationS3Output: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LocationArn: {
      shape: {
        type: "string"
      }
    },
    LocationUri: {
      shape: {
        type: "string"
      }
    },
    S3Config: {
      shape: _S3Config
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
