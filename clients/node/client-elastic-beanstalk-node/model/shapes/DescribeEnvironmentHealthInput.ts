import { _EnvironmentHealthAttributes } from "./_EnvironmentHealthAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentHealthInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    EnvironmentId: {
      shape: {
        type: "string"
      }
    },
    AttributeNames: {
      shape: _EnvironmentHealthAttributes
    }
  }
};
