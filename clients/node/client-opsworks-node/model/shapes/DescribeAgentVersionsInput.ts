import { _StackConfigurationManager } from "./_StackConfigurationManager";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAgentVersionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    ConfigurationManager: {
      shape: _StackConfigurationManager
    }
  }
};
