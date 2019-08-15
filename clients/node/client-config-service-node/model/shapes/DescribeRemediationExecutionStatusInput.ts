import { _ResourceKeys } from "./_ResourceKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRemediationExecutionStatusInput: _Structure_ = {
  type: "structure",
  required: ["ConfigRuleName"],
  members: {
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceKeys: {
      shape: _ResourceKeys
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
