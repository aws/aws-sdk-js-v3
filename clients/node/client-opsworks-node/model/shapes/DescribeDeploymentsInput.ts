import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDeploymentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    AppId: {
      shape: {
        type: "string"
      }
    },
    DeploymentIds: {
      shape: _Strings
    }
  }
};
