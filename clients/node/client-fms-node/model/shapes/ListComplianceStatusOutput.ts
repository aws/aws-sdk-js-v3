import { _PolicyComplianceStatusList } from "./_PolicyComplianceStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListComplianceStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyComplianceStatusList: {
      shape: _PolicyComplianceStatusList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
