import { _DedicatedTenancyCidrRangeList } from "./_DedicatedTenancyCidrRangeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAvailableManagementCidrRangesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ManagementCidrRanges: {
      shape: _DedicatedTenancyCidrRangeList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
