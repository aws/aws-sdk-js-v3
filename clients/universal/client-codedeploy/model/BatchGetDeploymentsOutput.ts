import { _DeploymentsInfoList } from "./_DeploymentsInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetDeploymentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentsInfo: {
      shape: _DeploymentsInfoList
    }
  }
};
