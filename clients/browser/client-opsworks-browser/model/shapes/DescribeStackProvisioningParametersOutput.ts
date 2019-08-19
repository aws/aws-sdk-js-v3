import { _Parameters } from "./_Parameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackProvisioningParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AgentInstallerUrl: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _Parameters
    }
  }
};
