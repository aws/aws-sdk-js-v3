import { _PatchComplianceDataList } from "./_PatchComplianceDataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancePatchesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Patches: {
      shape: _PatchComplianceDataList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
