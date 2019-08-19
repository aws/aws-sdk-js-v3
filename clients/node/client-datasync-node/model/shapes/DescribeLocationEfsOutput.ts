import { _Ec2Config } from "./_Ec2Config";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLocationEfsOutput: _Structure_ = {
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
    Ec2Config: {
      shape: _Ec2Config
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
